import { Project, Skill, TechStackItem, Experience, Education } from '@/types'

export const skills: Skill[] = [
  {
    name: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    alt: 'Python',
    external: true,
  },
  {
    name: 'SQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    alt: 'SQL',
    external: true,
  },
  { name: 'HTML', src: '/images/html.png', alt: 'HTML' },
  { name: 'CSS', src: '/images/css.png', alt: 'CSS' },
  {
    name: 'Tailwind CSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    alt: 'Tailwind CSS',
    external: true,
  },
  { name: 'JavaScript', src: '/images/javascript.png', alt: 'JavaScript' },
  { name: 'React', src: '/images/react.png', alt: 'React' },
  {
    name: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    alt: 'Next.js',
    external: true,
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js',
    external: true,
  },
  {
    name: 'Express',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    alt: 'Express.js',
    external: true,
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    alt: 'MongoDB',
    external: true,
  },
  {
    name: 'Prisma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    alt: 'Prisma',
    external: true,
  },
  {
    name: 'Firebase',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    alt: 'Firebase',
    external: true,
  },
  { name: 'Framer Motion', src: '/images/framer-motion.svg', alt: 'Framer Motion' },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TypeScript',
    external: true,
  },
  {
    name: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    alt: 'PostgreSQL',
    external: true,
  },
  {
    name: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    alt: 'Docker',
    external: true,
  },
  {
    name: 'Google Cloud',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    alt: 'Google Cloud',
    external: true,
  },
  {
    name: 'Redis',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    alt: 'Redis',
    external: true,
  },
  {
    name: 'Three.js',
    src: 'https://threejs.org/files/logo.png',
    alt: 'Three.js',
    external: true,
  },
  {
    name: 'LangChain',
    src: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4',
    alt: 'LangChain',
    external: true,
  },
  {
    name: 'LangGraph',
    src: 'https://langchain-ai.github.io/langgraph/img/favicon.ico',
    alt: 'LangGraph',
    external: true,
  },
  {
    name: 'React Query',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React Query',
    external: true,
  },
  {
    name: 'Zustand',
    src: 'https://avatars.githubusercontent.com/u/44566809?s=200&v=4',
    alt: 'Zustand',
    external: true,
  },
  {
    name: 'shadcn/ui',
    src: 'https://ui.shadcn.com/favicon.ico',
    alt: 'shadcn/ui',
    external: true,
  },
]

// PLACEHOLDER PROJECTS — replace each entry below with your own work.
// See the "Adding New Projects" section in README.md for the shape of an entry.
export const fullstackProjects: Project[] = [
  {
    title: '[YOUR_PROJECT_1] - Fullstack Project',
    image: '/images/project-placeholder.svg',
    alt: 'Placeholder project screenshot',
    liveUrl: '#',
    category: 'Fullstack',
    tags: ['Fullstack', 'Replace Me'],
    description: 'Describe your project here: what it does, the problem it solves, the features you built, and the impact it had. Replace this placeholder with a real project.',
    techStack: [
      { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', external: true },
      { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', external: true },
      { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', external: true },
    ],
  },
  {
    title: '[YOUR_PROJECT_2] - Fullstack Project',
    image: '/images/project-placeholder.svg',
    alt: 'Placeholder project screenshot',
    liveUrl: '#',
    category: 'Fullstack',
    tags: ['Fullstack', 'Replace Me'],
    description: 'Describe your project here: what it does, the problem it solves, the features you built, and the impact it had. Replace this placeholder with a real project.',
    techStack: [
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', external: true },
      { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', external: true },
    ],
  },
]

export const frontendProjects: Project[] = [
  {
    title: '[YOUR_PROJECT_3] - Frontend Project',
    image: '/images/project-placeholder.svg',
    alt: 'Placeholder project screenshot',
    liveUrl: '#',
    category: 'Frontend',
    tags: ['Frontend', 'Replace Me'],
    description: 'Describe your project here: what it does, the problem it solves, the features you built, and the impact it had. Replace this placeholder with a real project.',
    techStack: [
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', external: true },
      { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', external: true },
    ],
  },
]

// PLACEHOLDER EXPERIENCE — replace with your real work history.
export const experiences: Experience[] = [
  {
    title: '[YOUR_JOB_TITLE]',
    company: '[YOUR_COMPANY]',
    location: 'Lagos, Nigeria',
    type: 'Remote',
    startDate: '[START_DATE]',
    endDate: '[END_DATE]',
    achievements: [
      'Describe a key achievement in this role: what you built, the technologies you used, and the measurable impact',
      'Add another achievement here',
      'Add another achievement here',
    ],
  },
]

// PLACEHOLDER EDUCATION — replace with your real education details.
export const education: Education = {
  institution: '[YOUR_UNIVERSITY]',
  degree: '[YOUR_DEGREE]',
  location: 'Nigeria',
  startDate: '[START_YEAR]',
  endDate: 'Present',
  cgpa: '[YOUR_CGPA]',
  highlights: [
    'Add a notable highlight, award, or relevant coursework here',
  ],
}
