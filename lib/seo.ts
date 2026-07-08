import { Metadata } from 'next'

export const siteConfig = {
  name: 'Abdul-Salam Adebayo',
  title: 'Abdul-Salam Adebayo - AI Engineer | Multimodal AI, Next.js, Django',
  description: 'AI Engineer based in Lagos, Nigeria, building AI-powered systems that solve real problems — multimodal AI, explainable ML, and full-stack development with Next.js and Django.',
  url: 'https://salam-0-portfolio.vercel.app',
  ogImage: 'https://salam-0-portfolio.vercel.app/images/profile-placeholder.svg',
  links: {
    twitter: 'https://twitter.com/salamtweets_',
    github: 'https://github.com/Abdul-Salam15',
    linkedin: 'https://www.linkedin.com/in/abdul-salam-adebayo',
    email: 'abdulsalamadebayo0410@gmail.com',
  },
  keywords: [
    'Abdul-Salam Adebayo',
    'AI Engineer',
    'Software Engineer',
    'Machine Learning Engineer',
    'Multimodal AI',
    'Explainable AI',
    'Machine Learning',
    'React Developer',
    'Next.js Developer',
    'Django Developer',
    'TypeScript Developer',
    'Python Developer',
    'Full Stack Developer',
    'AI Engineer Nigeria',
    'Web Developer Lagos',
    'FarmBuddy',
    'Text-to-Speech',
    'API Development',
    'Software Development',
    'Web Application Development',
  ],
  author: {
    name: 'Abdul-Salam Adebayo',
    email: 'abdulsalamadebayo0410@gmail.com',
    url: 'https://salam-0-portfolio.vercel.app',
  },
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
  keywords,
}: {
  title?: string
  description?: string
  image?: string
  url?: string
  noIndex?: boolean
  keywords?: string[]
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const allKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@salamtweets_',
      site: '@salamtweets_',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/images/profile-placeholder.svg', type: 'image/svg+xml' },
      ],
      shortcut: '/favicon.svg',
    },
    manifest: '/manifest.json',
  }
}

// Structured Data (JSON-LD) Schemas
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdul-Salam Adebayo',
  alternateName: 'Abdul-Salam',
  url: siteConfig.url,
  image: siteConfig.ogImage,
  email: siteConfig.links.email,
  jobTitle: 'AI Engineer',
  worksFor: {
    '@type': 'Organization',
    name: '4orge',
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'Bowen University',
    sameAs: 'https://bowen.edu.ng',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Multimodal AI',
    'Explainable AI',
    'Text-to-Speech Systems',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Django',
    'Full Stack Development',
  ],
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.github,
    siteConfig.links.linkedin,
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'Nigeria',
  },
  telephone: '+234-807-126-1492',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  creator: {
    '@type': 'Person',
    name: siteConfig.author.name,
  },
}

export const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: personSchema,
  url: siteConfig.url,
  description: siteConfig.description,
  name: siteConfig.title,
}

export function generateProjectSchema(project: {
  title: string
  description: string
  image: string
  liveUrl: string
  sourceCode?: string
  techStack?: Array<{ name: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: `${siteConfig.url}${project.image}`,
    url: project.liveUrl,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    creator: {
      '@type': 'Person',
      name: siteConfig.author.name,
    },
    keywords: project.techStack?.map(tech => tech.name).join(', '),
    ...(project.sourceCode && {
      codeRepository: project.sourceCode,
    }),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

