import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Leadership from '@/components/Leadership'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { generateMetadata as generateSEOMetadata, profilePageSchema } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Portfolio',
  description: 'Explore my portfolio of AI and full-stack projects — multimodal AI systems, explainable ML, and production web apps built with Python, Next.js, Django, React, and TypeScript.',
  url: '/portfolio',
  keywords: [
    'portfolio',
    'projects',
    'web development portfolio',
    'full stack projects',
    'React projects',
    'Next.js portfolio',
    'AI projects',
    'software engineering portfolio',
  ],
})

export default function PortfolioPage() {
  return (
    <>
      {/* Structured Data - Profile Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Leadership />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
