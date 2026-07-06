// Portfolio knowledge base - chunked for RAG retrieval
// PLACEHOLDER CONTENT — replace the bracketed [YOUR_...] items with your real details.
// Each chunk needs: a unique id, keywords the retriever matches against, and the content the AI answers from.
export const portfolioChunks = [
  {
    id: 'bio',
    keywords: ['who', 'salam', 'abdul-salam', 'about', 'student', 'education', 'university', 'contact', 'email', 'phone', 'social', 'links'],
    content: `Abdul-Salam Adebayo (Abdul-Salam) is a software engineer based in Lagos, Nigeria.
    [YOUR_BIO: Add a short summary of who you are, your education, and any notable achievements.]

    CONTACT:
    - Email: abdulsalamadebayo0410@gmail.com
    - GitHub: github.com/Abdul-Salam15
    - Twitter: twitter.com/salamtweets_
    - LinkedIn: [YOUR_LINKEDIN_URL]
    - Portfolio: [Full Portfolio](/portfolio)

    He's a developer who builds scalable web applications, with interests spanning full-stack development and machine learning.`
  },
  {
    id: 'experience',
    keywords: ['experience', 'work', 'job', 'career', 'employment', 'role', 'position', 'company', 'intern', 'internship'],
    content: `[YOUR_JOB_TITLE] at [YOUR_COMPANY] ([START_DATE] - [END_DATE]):
    - [Describe a key achievement: what you built, the technologies used, and the measurable impact]
    - [Add another achievement]
    - [Add another achievement]`
  },
  {
    id: 'education',
    keywords: ['education', 'school', 'university', 'degree', 'student', 'cgpa', 'academic', 'study'],
    content: `Education: [YOUR_DEGREE] at [YOUR_UNIVERSITY] ([START_YEAR] - Present).
    - CGPA: [YOUR_CGPA]
    - [Add a notable highlight, award, or relevant coursework]`
  },
  {
    id: 'skills',
    keywords: ['skills', 'tech', 'stack', 'technologies', 'tools', 'languages', 'learning', 'what', 'know', 'familiar'],
    content: `Technical Skills:

    LANGUAGES: JavaScript, TypeScript, HTML5/CSS3, Python, SQL

    FRONTEND: React, Next.js, Tailwind CSS

    BACKEND: Node.js, Express.js, MongoDB, PostgreSQL

    DEVOPS & TOOLS: Git, Figma, Vercel, Postman

    [Adjust this list to your actual skills — remove what you don't use and add what's missing.]`
  },
  {
    id: 'all_projects',
    keywords: ['projects', 'built', 'created', 'developed', 'portfolio', 'work', 'show', 'showcase', 'list'],
    content: `## FULLSTACK PROJECTS

### 1. [YOUR_PROJECT_1]
**Category:** Fullstack
**Description:** [Describe what the project does, the problem it solves, and what you built.]
**Tech Stack:** [Technologies used]

---

### 2. [YOUR_PROJECT_2]
**Category:** Fullstack
**Description:** [Describe what the project does, the problem it solves, and what you built.]
**Tech Stack:** [Technologies used]

---

## FRONTEND PROJECTS

### 3. [YOUR_PROJECT_3]
**Category:** Frontend
**Description:** [Describe what the project does, the problem it solves, and what you built.]
**Tech Stack:** [Technologies used]`
  },
]

// Keyword synonyms and related terms for better matching
const keywordSynonyms: Record<string, string[]> = {
  'project': ['projects', 'work', 'built', 'developed', 'created', 'portfolio'],
  'experience': ['work', 'job', 'career', 'employment', 'role', 'position'],
  'skills': ['tech', 'stack', 'technologies', 'tools', 'languages', 'frameworks'],
  'frontend': ['front-end', 'ui', 'react', 'next.js', 'nextjs', 'interface'],
  'backend': ['back-end', 'server', 'api', 'node', 'express', 'database'],
  'ai': ['artificial intelligence', 'machine learning', 'ml', 'chatbot', 'langchain'],
  'database': ['db', 'sql', 'postgresql', 'mongo', 'mongodb', 'redis'],
  'contact': ['email', 'phone', 'reach', 'connect', 'social'],
  'education': ['school', 'university', 'student', 'cgpa', 'academic'],
  'ecommerce': ['e-commerce', 'shop', 'store', 'cart', 'payment'],
}

// Preprocess query: expand with synonyms and extract intent
function preprocessQuery(query: string): { 
  expandedQuery: string
  intent: 'projects' | 'experience' | 'skills' | 'contact' | 'general'
} {
  const lowerQuery = query.toLowerCase()
  let expandedTerms = lowerQuery.split(/\s+/)
  
  // Expand query with synonyms
  const synonymMatches = new Set<string>()
  for (const [key, synonyms] of Object.entries(keywordSynonyms)) {
    if (lowerQuery.includes(key) || synonyms.some(syn => lowerQuery.includes(syn))) {
      synonymMatches.add(key)
      synonyms.forEach(syn => synonymMatches.add(syn))
    }
  }
  
  expandedTerms = [...expandedTerms, ...Array.from(synonymMatches)]
  
  // Detect intent
  let intent: 'projects' | 'experience' | 'skills' | 'contact' | 'general' = 'general'
  if (/show|display|view|see|list/.test(lowerQuery) && /project/.test(lowerQuery)) {
    intent = 'projects'
  } else if (/experience|work|job|career|role/.test(lowerQuery)) {
    intent = 'experience'
  } else if (/skill|tech|stack|technolog|framework|language/.test(lowerQuery)) {
    intent = 'skills'
  } else if (/contact|email|phone|reach|connect/.test(lowerQuery)) {
    intent = 'contact'
  }
  
  return {
    expandedQuery: expandedTerms.join(' '),
    intent
  }
}

// Enhanced keyword-based retrieval with synonym matching and weighting
// TODO: Upgrade to semantic embeddings for better relevance
export function retrieveRelevantChunks(query: string, maxChunks: number = 3): string {
  const { expandedQuery, intent } = preprocessQuery(query)
  const lowerQuery = expandedQuery.toLowerCase()
  
  // Score each chunk based on keyword matches with weighting
  const scored = portfolioChunks.map(chunk => {
    let score = 0
    
    // Exact keyword matches (higher weight)
    chunk.keywords.forEach(keyword => {
      if (lowerQuery.includes(keyword)) {
        // Boost score for exact matches
        score += 2
        
        // Extra boost for intent-matching chunks
        if (intent === 'experience' && chunk.keywords.includes('experience')) score += 1
        if (intent === 'skills' && chunk.keywords.includes('skills')) score += 1
        if (intent === 'projects' && chunk.id.includes('details')) score += 1
        if (intent === 'contact' && chunk.id === 'bio') score += 2
      }
    })
    
    // Partial matches in content (lower weight)
    const queryTerms = lowerQuery.split(/\s+/)
    queryTerms.forEach(term => {
      if (term.length > 3 && chunk.content.toLowerCase().includes(term)) {
        score += 0.5
      }
    })
    
    return { chunk, score }
  })
  
  // Sort by score and take top N
  const topChunks = scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxChunks)
    .map(item => item.chunk.content)
  
  // Fallback: if no matches, return bio + skills for general queries
  if (topChunks.length === 0) {
    const bio = portfolioChunks.find(c => c.id === 'bio')?.content || ''
    const skills = portfolioChunks.find(c => c.id === 'skills')?.content || ''
    return `${bio}\n\n${skills}`
  }
  
  return topChunks.join('\n\n')
}
