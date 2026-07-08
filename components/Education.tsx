'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { education } from '@/constants'

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })
  const { ref: cardRef, isVisible: cardVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section
      id="education"
      ref={ref}
      className={`py-12 md:py-20 px-4 md:px-8 transition-opacity duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4">
            Education
          </h2>
          <div className="w-32 h-0.5 bg-[var(--text-primary)] mx-auto"></div>
        </div>

        {/* Education Card */}
        <div
          ref={cardRef}
          className={`max-w-3xl mx-auto transition-opacity duration-500 ${
            cardVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="border border-[var(--border)]/40 rounded-xl md:rounded-2xl bg-[var(--bg-secondary)]/30 hover:border-[var(--text-primary)] transition-all duration-500 p-6 md:p-8">
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                {education.degree}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-base md:text-lg text-[var(--text-primary)] font-semibold mb-1">
              <span>{education.institution}</span>
              <span className="text-[var(--text-secondary)]">•</span>
              <span className="text-[var(--text-secondary)]">{education.location}</span>
            </div>
            <p className="text-sm md:text-base text-[var(--text-secondary)]">
              {education.startDate} – {education.endDate}
            </p>
            {education.cgpa && (
              <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2">
                CGPA: {education.cgpa}
              </p>
            )}
            {education.highlights && education.highlights.length > 0 && (
              <ul className="space-y-3 mt-4">
                {education.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] mt-2"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
