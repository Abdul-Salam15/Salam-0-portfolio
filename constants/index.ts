import { Project, Skill, TechStackItem, Experience, Education, LeadershipRole } from '@/types'

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
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TypeScript',
    external: true,
  },
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
    name: 'Django',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    alt: 'Django',
    external: true,
  },
  {
    name: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    alt: 'PostgreSQL',
    external: true,
  },
  {
    name: 'Pandas',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    alt: 'Pandas',
    external: true,
  },
  {
    name: 'scikit-learn',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
    alt: 'scikit-learn',
    external: true,
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'Git',
    external: true,
  },
]

export const fullstackProjects: Project[] = [
  {
    title: 'FarmBuddy - Multimodal AI Agricultural Advisor',
    image: '/images/project-placeholder.svg',
    alt: 'FarmBuddy - multimodal AI decision support system for smallholder farmers',
    liveUrl: 'https://farmbuddy-orcin.vercel.app/',
    category: 'Fullstack',
    tags: ['Fullstack', 'Multimodal AI'],
    description: 'A multimodal AI agricultural advisory system built for Nigerian smallholder farmers. It pairs OpenAI for reasoning with YarnGPT for multilingual text-to-speech across Hausa, Igbo, Yoruba, and Nigerian English, closing the language gap that keeps most AI tools out of reach for millions of farmers. Delivered as a PWA and a Telegram bot so it stays accessible in low-data areas, and scored 89.56/100 (Excellent) on the System Usability Scale in testing with 80 participants.',
    techStack: [
      { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', external: true },
      { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', external: true },
      { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', external: true },
    ],
  },
  {
    title: 'NEXUS - AI-Powered Task Management',
    image: '/images/project-placeholder.svg',
    alt: 'NEXUS - AI-powered task management system',
    liveUrl: 'https://nexus-frontend-2hy5.onrender.com',
    category: 'Fullstack',
    tags: ['Fullstack', 'AI Productivity'],
    description: 'A full-stack task manager with auto-scheduling, productivity analytics, and AI-powered recommendations. It automatically packs pending tasks into upcoming weekdays based on deadline, priority, and effort estimate, while tracking completion rates and workload trends. Task recommendations are powered by the Gemini API with built-in heuristics as a fallback, and it includes full JWT-based authentication with refresh tokens and an email-based OTP password reset flow.',
    techStack: [
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', external: true },
      { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', external: true },
      { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', external: true },
    ],
  },
  {
    title: 'VitalWatch - Health Monitoring Platform',
    image: '/images/project-placeholder.svg',
    alt: 'VitalWatch - health monitoring and medication adherence platform',
    liveUrl: 'https://vitalwatch-5hgr.onrender.com',
    category: 'Fullstack',
    tags: ['Fullstack', 'Health Tech'],
    description: 'A personal health-monitoring web app for logging daily vitals (heart rate, SpO2, temperature, steps) with instant analysis and anomaly detection. Includes a medication reminder system with escalating in-app alarms and automated email alerts to caregivers when doses are missed, plus a tokenized read-only caregiver view requiring no login. Built with timezone-aware scheduling so reminders and adherence tracking are always evaluated in the patient\'s local time.',
    techStack: [
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', external: true },
      { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', external: true },
      { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', external: true },
    ],
  },
]

export const aimlProjects: Project[] = [
  {
    title: 'CardioXAI - Explainable Heart Disease Risk Screening',
    image: '/images/project-placeholder.svg',
    alt: 'CardioXAI - explainable AI system for coronary heart disease risk screening',
    liveUrl: 'https://cardioxai-rovx.onrender.com',
    category: 'AI/ML',
    tags: ['AI/ML', 'Explainable AI'],
    description: 'An explainable AI system that estimates coronary heart disease risk using only self-reported lifestyle and demographic data — no lab tests required. Trained three classifiers (Logistic Regression, Random Forest, XGBoost) on the CDC\'s BRFSS dataset of 253,680 records with SMOTE for class imbalance, then built a weighted consensus ensemble achieving 0.815 AUC-ROC. Every prediction includes dual explainability through SHAP and LIME, a confidence tier based on inter-model disagreement, and an interactive risk-factor knowledge graph.',
    techStack: [
      { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', external: true },
      { name: 'scikit-learn', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', external: true },
      { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', external: true },
    ],
  },
  {
    title: 'Employee Attrition Prediction',
    image: '/images/project-placeholder.svg',
    alt: 'Employee attrition prediction - HR analytics and classification',
    liveUrl: 'https://employee-attrition-prediction.hashnode.dev/predict-employee-attrition-using-python-and-logistic-regression',
    category: 'AI/ML',
    tags: ['AI/ML', 'HR Analytics'],
    description: 'An exploratory data analysis and baseline classification project identifying the factors driving employee attrition. Analyzed attrition patterns across department, gender, education field, and job role, then trained a Logistic Regression model after addressing class imbalance with random oversampling, achieving a 66.5% F1-score. Full write-up published on Hashnode.',
    techStack: [
      { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', external: true },
      { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', external: true },
      { name: 'scikit-learn', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg', external: true },
    ],
  },
]

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: '4orge',
    location: 'Nigeria',
    type: 'Full-time',
    startDate: 'Dec 2025',
    endDate: 'Present',
    achievements: [
      'Conducted thorough QA testing for "The Gaffer", identifying bugs and inconsistencies to enhance application reliability',
      'Collaborated on the backend development of a secured voting platform, ensuring safe and accurate vote handling',
      'Contributing to innovative solutions in a dynamic startup environment',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Merrowgate',
    location: 'Nigeria',
    type: 'Intern',
    startDate: 'Feb 2026',
    endDate: 'Apr 2026',
    achievements: [
      'Conducted thorough research on competitors and market weaknesses to enhance product positioning',
      'Planned and structured project development timelines, defining milestones and delivery phases for upcoming builds',
      'Outlined technical specifications for projects, detailing architecture and implementation requirements prior to development',
    ],
  },
  {
    title: 'Backend Engineering Intern',
    company: 'Synergy Solutions IMC LTD',
    location: 'Lagos, Nigeria',
    type: 'Intern',
    startDate: 'Jul 2025',
    endDate: 'Sep 2025',
    achievements: [
      'Developed a Task Management System utilizing the Gemini API for intelligent task recommendations',
      'Collaborated with senior engineers to design and implement scalable applications',
      'Optimized backend processes, significantly reducing API response times',
    ],
  },
  {
    title: 'Data Science Intern',
    company: 'Synergy Solutions IMC LTD',
    location: 'Lagos, Nigeria',
    type: 'Intern',
    startDate: 'Jul 2024',
    endDate: 'Jul 2025',
    achievements: [
      'Developed a logistic regression model to predict employee churn, supporting strategic retention initiatives',
      'Cleaned and preprocessed datasets to ensure high-quality data for analysis and modeling',
      'Assisted in generating insightful reports, translating model outputs into actionable recommendations for stakeholders',
    ],
  },
]

export const leadership: LeadershipRole[] = [
  {
    title: 'Study/Research Group Lead',
    organization: 'Machine Learning Lagos',
    startDate: 'Aug 2025',
    endDate: 'Present',
    achievements: [
      'Leading bi-weekly study sessions for over 500 students, enhancing their understanding of machine learning concepts and research papers',
      'Facilitating guided discussions on practical applications of ML, fostering a collaborative learning environment',
      'Developing peer learning strategies that empower participants to tackle complex topics effectively',
    ],
  },
  {
    title: 'Co-Organizer',
    organization: 'GDG On Campus Bowen University',
    achievements: [
      'Helping student developers build real skills, not just credentials, through hands-on sessions and community events',
    ],
  },
  {
    title: 'Chairperson, Bowen Tech Week',
    organization: 'Bowen University',
    achievements: [
      'Chaired a tech conference that drew over 1,000 attendees',
      'Handled speaker curation, logistics, and sponsorship end to end',
    ],
  },
]

export const education: Education = {
  institution: 'Bowen University',
  degree: 'B.Sc. Computer Science',
  location: 'Iwo, Nigeria',
  startDate: 'Oct 2022',
  endDate: 'Jul 2026',
}
