# Abdul-Salam Adebayo — AI Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring an AI-powered chatbot assistant.

## ✨ Key Features

- 🤖 **AI Chatbot Assistant** - "Ask Salam" powered by LLaMA & RAG technology
- 🚀 Built with Next.js 14 and App Router
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS with custom theming
- 🌙 Dark mode support with system preference detection
- 📱 Fully responsive design (mobile-first)
- ⚡ Optimized for performance (90+ Lighthouse scores)
- 🔍 **SEO Optimized (10/10)** - Comprehensive metadata, structured data, sitemap
- 📱 PWA Support - Install as mobile app
- 🔒 Security headers and best practices
- ♿ Accessibility optimized (WCAG compliant)

## 🚀 Getting Started

### Prerequisites
- Node.js 24.x or higher
- npm, yarn, or pnpm

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Required for AI Chatbot
OPENAI_API_KEY=your_openai_api_key_here
```

To get an OpenAI API key:
1. Visit [platform.openai.com](https://platform.openai.com/api-keys)
2. Sign up or log in
3. Generate an API key

### Installation

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The AI chatbot will be available at the homepage, and the full portfolio at `/portfolio`.

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts         # AI chatbot API endpoint
│   ├── ask-salam/
│   │   └── page.tsx            # AI chatbot page
│   ├── portfolio/
│   │   └── page.tsx            # Main portfolio page
│   ├── projects/
│   │   └── page.tsx            # All projects page
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Home page
│   ├── sitemap.ts               # Dynamic sitemap
│   ├── robots.ts                # SEO robots.txt
│   ├── not-found.tsx            # 404 page
│   └── globals.css              # Global styles
├── components/
│   ├── Navbar.tsx               # Navigation bar
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Skills.tsx               # Skills section
│   ├── Projects.tsx             # Projects showcase
│   ├── Experience.tsx           # Work experience
│   ├── Contact.tsx              # Contact form
│   ├── Footer.tsx               # Footer
│   ├── Chatbot.tsx              # AI chatbot component
│   └── ChatbotPage.tsx          # Chatbot page layout
├── lib/
│   ├── seo.ts                   # SEO configuration & metadata
│   ├── portfolio-data.ts        # RAG knowledge base
│   ├── rate-limiter.ts          # API rate limiting
│   └── theme-provider.tsx       # Dark mode provider
├── constants/
│   └── index.ts                 # Projects, skills, experience data
├── public/
│   ├── images/                  # Project screenshots & assets
│   ├── manifest.json            # PWA manifest
│   └── browserconfig.xml        # Microsoft tile config
└── docs/
    └── SEO_IMPLEMENTATION.md    # SEO documentation
```

## 🎨 Customization

### Update Personal Information
1. **Portfolio Data**: Edit `lib/portfolio-data.ts` for AI chatbot knowledge
2. **Projects**: Update `constants/index.ts` - `fullstackProjects` & `frontendProjects`
3. **Skills**: Update `constants/index.ts` - `skills` array
4. **Experience**: Update `constants/index.ts` - `experiences` array
5. **SEO**: Modify `lib/seo.ts` for site-wide SEO settings
6. **Styling**: Customize colors in `app/globals.css` (CSS variables)
7. **Metadata**: Update `app/layout.tsx` for global meta tags

### Adding New Projects
```typescript
// In constants/index.ts
{
  title: 'Your Project Name',
  image: '/images/your-project.png',
  alt: 'Project description',
  liveUrl: 'https://your-project.com',
  category: 'Fullstack', // or 'Frontend'
  tags: ['Fullstack', 'Your Category'],
  description: 'Detailed project description...',
  techStack: [
    { name: 'React', src: 'icon-url', external: true },
    // Add your tech stack
  ],
  sourceCode: 'https://github.com/...' // Optional
}
```

## 📦 Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Or deploy to Vercel (recommended)
vercel deploy
```

## 🔍 SEO Features

This portfolio includes **enterprise-level SEO** optimization:

✅ **Metadata System**
- Open Graph tags for social media
- Twitter Cards
- Canonical URLs
- Comprehensive keywords

✅ **Structured Data (JSON-LD)**
- Person schema
- Website schema
- Profile page schema
- Creative work schema (projects)
- Breadcrumb navigation

✅ **Technical SEO**
- Dynamic sitemap (`/sitemap.xml`)
- Robots.txt configuration
- PWA manifest
- Security headers
- Performance optimization

✅ **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

For detailed SEO documentation, see [`docs/SEO_IMPLEMENTATION.md`](./docs/SEO_IMPLEMENTATION.md)

## 🧪 Testing & Validation

### SEO Testing
```bash
# Test with Google's tools
https://search.google.com/test/rich-results
https://search.google.com/test/mobile-friendly

# Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:3000 --view
```

### Expected Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100 ✨

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables:
   - `OPENAI_API_KEY`
4. Deploy!

### Other Platforms
Compatible with any Next.js hosting:
- Netlify
- Railway
- Render
- AWS Amplify
- Azure Static Web Apps

## 🤖 AI Chatbot Features

The "Ask Salam" chatbot uses:
- **GPT-4o mini** model via OpenAI
- **RAG (Retrieval-Augmented Generation)** for accurate responses
- **Rate limiting** to prevent abuse
- **Streaming responses** for better UX
- **Conversation history** (last 4 messages)
- **Dynamic UI triggers** for interactive elements

## 📊 Tech Stack Details

**Frontend:**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

**UI Components:**
- Radix UI primitives
- shadcn/ui
- Lucide React (icons)

**State Management:**
- Zustand (global state)
- TanStack Query (server state)

**AI/Backend:**
- OpenAI SDK
- LangChain
- Google Generative AI
- Custom RAG implementation

**Development Tools:**
- ESLint
- TypeScript compiler
- PostCSS
- Autoprefixer

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: abdulsalamadebayo0410@gmail.com
- **LinkedIn**: [www.linkedin.com/in/abdul-salam-adebayo](https://www.linkedin.com/in/abdul-salam-adebayo)
- **GitHub**: [github.com/Abdul-Salam15](https://github.com/Abdul-Salam15)
- **Twitter**: [@salamtweets_](https://twitter.com/salamtweets_)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [SEO Best Practices](https://developers.google.com/search/docs)

---

**Built with ❤️ by Abdul-Salam Adebayo**

