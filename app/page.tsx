import type { Metadata } from 'next'
import ChatbotPage from '@/components/ChatbotPage'
import { generateMetadata as generateSEOMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Ask Salam AI - Interactive Portfolio Assistant',
  description: 'Chat with an AI-powered assistant about Abdul-Salam Adebayo\'s software engineering experience, skills, and projects. Get instant answers powered by advanced RAG technology and LLaMA AI.',
  url: '/',
  keywords: [
    'AI portfolio',
    'interactive resume',
    'chatbot portfolio',
    'AI assistant',
    'LLaMA chatbot',
    'RAG technology',
    'developer AI',
    'tech portfolio',
  ],
})

export default function HomePage() {
  return <ChatbotPage homeIcon="home" homeLink="/portfolio" />
}
