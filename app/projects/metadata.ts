import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'All Projects',
  description: 'Browse all my full-stack and AI/ML projects — multimodal AI advisory systems, explainable ML models, and production web platforms. Built with Python, Next.js, Django, React, and TypeScript.',
  url: '/projects',
  keywords: [
    'all projects',
    'AI projects',
    'machine learning projects',
    'explainable AI',
    'web development projects',
    'React applications',
    'Next.js projects',
    'Django projects',
    'full-stack applications',
    'software portfolio',
  ],
})

