// Portfolio knowledge base - chunked for RAG retrieval
export const portfolioChunks = [
  {
    id: 'bio',
    keywords: ['who', 'salam', 'abdul-salam', 'about', 'bio', 'graduate', 'contact', 'email', 'phone', 'social', 'links', 'hobbies', 'interests'],
    content: `Abdul-Salam Adebayo (Abdul-Salam) is an AI Engineer and Computer Science graduate from Bowen University, based in Lagos, Nigeria. He builds AI-powered systems that solve real problems rather than proof-of-concepts. His technical focus sits at the intersection of multimodal AI, full-stack development (Next.js & Django), and multilingual text-to-speech systems. He is currently looking for full-time AI/software engineering roles where he can build systems that matter at scale.

    CONTACT:
    - Email: abdulsalamadebayo0410@gmail.com
    - Phone: +234-807-126-1492
    - GitHub: github.com/Abdul-Salam15
    - LinkedIn: linkedin.com/in/abdul-salam-adebayo
    - Twitter: twitter.com/salamtweets_
    - Portfolio: [Full Portfolio](/portfolio)

    Outside of engineering he watches football, plays story-driven video games, and speedcubes (always trying to shave seconds off his Rubik's Cube solve time). He speaks English and Yoruba.`
  },
  {
    id: 'experience_4orge',
    keywords: ['4orge', 'gaffer', 'voting', 'qa', 'current', 'experience', 'work', 'job', 'career', 'employment', 'startup'],
    content: `Software Engineer at 4orge (Dec 2025 - Present, Nigeria):
    - Conducted thorough QA testing for "The Gaffer", identifying bugs and inconsistencies to enhance application reliability
    - Collaborated on the backend development of a secured voting platform, ensuring safe and accurate vote handling
    - Contributing to innovative solutions in a dynamic startup environment`
  },
  {
    id: 'experience_merrowgate',
    keywords: ['merrowgate', 'research', 'specifications', 'experience', 'work', 'job', 'career', 'employment', 'internship'],
    content: `Software Engineer Intern at Merrowgate (Feb 2026 - Apr 2026, Nigeria):
    - Conducted thorough research on competitors and market weaknesses to enhance product positioning
    - Planned and structured project development timelines, defining milestones and delivery phases
    - Outlined technical specifications for projects, detailing architecture and implementation requirements prior to development`
  },
  {
    id: 'experience_synergy',
    keywords: ['synergy', 'backend', 'gemini', 'data science', 'churn', 'experience', 'work', 'job', 'career', 'employment', 'internship'],
    content: `Backend Engineering Intern at Synergy Solutions IMC LTD (Jul 2025 - Sep 2025, Lagos):
    - Developed a Task Management System utilizing the Gemini API for intelligent task recommendations
    - Collaborated with senior engineers to design and implement scalable applications
    - Optimized backend processes, significantly reducing API response times

    Data Science Intern at Synergy Solutions IMC LTD (Jul 2024 - Jul 2025, Lagos):
    - Developed a logistic regression model to predict employee churn, supporting strategic retention initiatives
    - Cleaned and preprocessed datasets to ensure high-quality data for analysis and modeling
    - Generated insightful reports, translating model outputs into actionable recommendations for stakeholders`
  },
  {
    id: 'leadership',
    keywords: ['community', 'leadership', 'gdg', 'google', 'ml lagos', 'machine learning lagos', 'teach', 'mentor', 'volunteer', 'tech week', 'conference', 'organizer'],
    content: `Leadership & Community:
    - Study/Research Group Lead at Machine Learning Lagos (Aug 2025 - Present): leads bi-weekly study sessions for 500+ students on machine learning concepts and research papers, facilitates guided discussions on practical ML applications, and develops peer-learning strategies
    - Co-Organizer of GDG On Campus Bowen University: helps student developers build real skills, not just credentials
    - Chairperson of Bowen Tech Week: chaired a tech conference that drew over 1,000 attendees, handling speaker curation, logistics, and sponsorship end to end`
  },
  {
    id: 'education',
    keywords: ['education', 'school', 'university', 'bowen', 'degree', 'student', 'academic', 'study', 'computer science'],
    content: `Education: B.Sc. Computer Science at Bowen University, Iwo, Nigeria (Oct 2022 - Jul 2026).
    Languages spoken: English (native/bilingual), Yoruba (native/bilingual).`
  },
  {
    id: 'skills',
    keywords: ['skills', 'tech', 'stack', 'technologies', 'tools', 'languages', 'learning', 'what', 'know', 'familiar', 'ai', 'ml'],
    content: `Technical Skills:

    LANGUAGES: Python, JavaScript, TypeScript, SQL, HTML5, CSS3

    AI/ML: OpenAI integration, Gemini API, multimodal AI systems, scikit-learn, Pandas, XGBoost, SHAP/LIME explainability, multilingual text-to-speech (YarnGPT)

    FRONTEND: React, Next.js, Tailwind CSS

    BACKEND: Django, Node.js, Express.js, PostgreSQL, API performance optimization

    TOOLS & PLATFORMS: Git, Vercel, JWT authentication, Telegram Bot API, PWA

    LinkedIn top skills: OpenAI Integration, API Performance Optimization, Multimodal AI Systems`
  },
  {
    id: 'farmbuddy_details',
    keywords: ['farmbuddy', 'farm', 'farmer', 'agriculture', 'agricultural', 'yarngpt', 'hausa', 'igbo', 'yoruba', 'telegram', 'tts', 'text-to-speech', 'multimodal', 'flagship'],
    content: `FarmBuddy - Multimodal AI Agricultural Advisor (flagship project) | Next.js, Django, OpenAI, YarnGPT:

    LIVE: https://farmbuddy-orcin.vercel.app/

    A multimodal AI agricultural advisory system built for Nigerian smallholder farmers. It pairs OpenAI for reasoning with YarnGPT for multilingual text-to-speech across Hausa, Igbo, Yoruba, and Nigerian English, closing the language gap that keeps most AI tools out of reach for millions of farmers.

    KEY FEATURES:
    - OpenAI-powered reasoning for agricultural advice
    - YarnGPT multilingual text-to-speech (Hausa, Igbo, Yoruba, Nigerian English)
    - Delivered as a PWA and a Telegram bot, staying accessible in low-data areas without a native app install
    - Scored 89.56/100 (Excellent) on the System Usability Scale in usability testing with 80 participants

    TECH STACK: Next.js, Django, OpenAI API, YarnGPT, PWA, Telegram Bot API`
  },
  {
    id: 'cardioxai_details',
    keywords: ['cardioxai', 'cardio', 'heart', 'disease', 'health', 'risk', 'xai', 'explainable', 'shap', 'lime', 'xgboost', 'ensemble', 'brfss'],
    content: `CardioXAI - Explainable AI System for Coronary Heart Disease Risk Screening | Python, scikit-learn, XGBoost:

    LIVE: https://cardioxai-rovx.onrender.com

    An explainable AI system that estimates coronary heart disease risk using only self-reported lifestyle and demographic data, requiring no lab tests.

    KEY DETAILS:
    - Trained three classifiers (Logistic Regression, Random Forest, XGBoost) on the CDC's BRFSS dataset of 253,680 records
    - Applied SMOTE to address class imbalance
    - Weighted consensus ensemble achieving 0.815 AUC-ROC on the test set
    - Every prediction includes dual explainability through SHAP and LIME
    - Confidence tier based on inter-model disagreement
    - Interactive risk-factor knowledge graph`
  },
  {
    id: 'nexus_details',
    keywords: ['nexus', 'task', 'management', 'productivity', 'scheduling', 'jwt', 'otp', 'gemini'],
    content: `NEXUS - Full Stack AI-Powered Task Management System | React, TypeScript, Express:

    LIVE: https://nexus-frontend-2hy5.onrender.com

    A full-stack task manager with auto-scheduling, productivity analytics, and AI-powered recommendations.

    KEY FEATURES:
    - Automatically packs pending tasks into upcoming weekdays based on deadline, priority, and effort estimate
    - Tracks completion rates and workload trends
    - Task recommendations powered by the Gemini API, with built-in heuristics as a fallback when no API key is configured
    - Full JWT-based authentication with refresh tokens
    - Email-based OTP password reset flow`
  },
  {
    id: 'vitalwatch_details',
    keywords: ['vitalwatch', 'vitals', 'health', 'monitoring', 'medication', 'adherence', 'caregiver', 'heart rate', 'spo2', 'reminder'],
    content: `VitalWatch - Health Monitoring & Medication Adherence Platform | React, TypeScript, Node.js:

    LIVE: https://vitalwatch-5hgr.onrender.com

    A personal health-monitoring web app for logging daily vitals with instant analysis and anomaly detection.

    KEY FEATURES:
    - Daily vitals logging: heart rate, SpO2, temperature, steps
    - Anomaly detection on logged vitals
    - Medication reminder system with escalating in-app alarms
    - Automated email alerts to caregivers when doses are missed
    - Tokenized read-only caregiver view requiring no login
    - Timezone-aware scheduling so reminders and adherence tracking are always evaluated in the patient's local time`
  },
  {
    id: 'attrition_details',
    keywords: ['attrition', 'employee', 'hr', 'churn', 'logistic', 'regression', 'oversampling', 'hashnode', 'analytics'],
    content: `Employee Attrition Prediction - HR Analytics & Attrition Classification | Python, Pandas, scikit-learn:

    WRITE-UP: https://employee-attrition-prediction.hashnode.dev/predict-employee-attrition-using-python-and-logistic-regression

    An exploratory data analysis and baseline classification project identifying the factors driving employee attrition.

    KEY DETAILS:
    - Analyzed attrition patterns across department, gender, education field, and job role
    - Trained a Logistic Regression model after addressing class imbalance with random oversampling
    - Achieved a 66.5% F1-score
    - Full write-up published on Hashnode`
  },
  {
    id: 'all_projects',
    keywords: ['projects', 'built', 'created', 'developed', 'portfolio', 'work', 'show', 'showcase', 'list'],
    content: `## FULLSTACK PROJECTS

### 1. FarmBuddy - Multimodal AI Agricultural Advisor
**Category:** Fullstack | Multimodal AI
**Live:** [View Project](https://farmbuddy-orcin.vercel.app/)
**Description:** Multimodal AI advisory system for Nigerian smallholder farmers. OpenAI reasoning + YarnGPT text-to-speech in Hausa, Igbo, Yoruba, and Nigerian English. Delivered as a PWA and Telegram bot for low-data areas. Scored 89.56/100 on the System Usability Scale with 80 participants.
**Tech Stack:** Next.js, Django, OpenAI, YarnGPT

---

### 2. NEXUS - AI-Powered Task Management
**Category:** Fullstack | AI Productivity
**Live:** [View Project](https://nexus-frontend-2hy5.onrender.com)
**Description:** Full-stack task manager with auto-scheduling by deadline/priority/effort, productivity analytics, Gemini-powered recommendations with heuristic fallback, JWT auth with refresh tokens, and email OTP password reset.
**Tech Stack:** React, TypeScript, Express, Gemini API

---

### 3. VitalWatch - Health Monitoring Platform
**Category:** Fullstack | Health Tech
**Live:** [View Project](https://vitalwatch-5hgr.onrender.com)
**Description:** Health-monitoring app for daily vitals with anomaly detection, escalating medication reminders, caregiver email alerts, and a tokenized read-only caregiver view. Timezone-aware scheduling.
**Tech Stack:** React, TypeScript, Node.js

---

## AI/ML PROJECTS

### 4. CardioXAI - Explainable Heart Disease Risk Screening
**Category:** AI/ML | Explainable AI
**Live:** [View Project](https://cardioxai-rovx.onrender.com)
**Description:** Explainable AI for coronary heart disease risk from self-reported data. LogReg/RandomForest/XGBoost ensemble on CDC BRFSS (253,680 records), 0.815 AUC-ROC, SHAP + LIME explainability, confidence tiers, risk-factor knowledge graph.
**Tech Stack:** Python, scikit-learn, XGBoost, SHAP, LIME

---

### 5. Employee Attrition Prediction
**Category:** AI/ML | HR Analytics
**Live:** [Read Write-up](https://employee-attrition-prediction.hashnode.dev/predict-employee-attrition-using-python-and-logistic-regression)
**Description:** EDA + logistic regression attrition classifier with random oversampling, achieving 66.5% F1-score.
**Tech Stack:** Python, Pandas, scikit-learn`
  },
]

// Keyword synonyms and related terms for better matching
const keywordSynonyms: Record<string, string[]> = {
  'project': ['projects', 'work', 'built', 'developed', 'created', 'portfolio'],
  'experience': ['work', 'job', 'career', 'employment', 'role', 'position'],
  'skills': ['tech', 'stack', 'technologies', 'tools', 'languages', 'frameworks'],
  'ai': ['artificial intelligence', 'machine learning', 'ml', 'multimodal', 'openai', 'gemini', 'llm'],
  'backend': ['back-end', 'server', 'api', 'node', 'express', 'django', 'database'],
  'database': ['db', 'sql', 'postgresql'],
  'contact': ['email', 'phone', 'reach', 'connect', 'social'],
  'education': ['school', 'university', 'student', 'academic', 'bowen'],
  'farmbuddy': ['farm', 'farmer', 'farming', 'agriculture', 'agricultural', 'crops'],
  'cardioxai': ['cardio', 'heart', 'disease', 'xai', 'explainable'],
  'nexus': ['task', 'tasks', 'productivity', 'scheduling'],
  'vitalwatch': ['vitals', 'medication', 'caregiver', 'monitoring'],
  'attrition': ['churn', 'hr', 'employee'],
  'community': ['leadership', 'gdg', 'volunteer', 'mentor', 'organizer'],
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
