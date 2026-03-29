import React from 'react'
import { useFadeIn } from '../utils/animation'
import './Contact.css'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.563a10.18 10.18 0 012.25 6.375c-.328-.063-3.625-.75-6.938-.313-.063-.156-.125-.313-.188-.469-.188-.453-.406-.922-.625-1.375 3.688-1.5 5.359-3.656 5.5-3.844v-.375zM12 1.813c2.656 0 5.094 1.031 6.906 2.719-.125.172-1.625 2.188-4.719 3.406-1.625-2.953-3.406-5.406-3.688-5.781A10.17 10.17 0 0112 1.813zm-3.969.75c.266.359 2.016 2.813 3.641 5.719-4.656 1.25-8.562 1.219-9.656 1.188-.031-.5.063-1 .156-1.5A10.156 10.156 0 018.03 2.563zM1.813 12v-.313c.344 1.766 1.Tr 3.453 2.125 4.953-1.078.25-2.156.375-2.125.375v.313c0 2.203 1.766 4 3.969 4.219-.016.172-.016-.141-.031-.313-.266-1.656-.625-6.453 1.578-9.5-.688.625-1.156 1.453-1.375 2.406A10.19 10.19 0 011.813 12zm6.906 9.125c-.578-.781-1.094-1.625-1.563-2.531 1.25-.188 2.453-.281 3.641-.281.422 0 .828.016 1.234.047-1.188.703-2.406 1.891-3.313 2.766zm3.453-3.625c-.406 0-.813-.016-1.219-.047 1.906-1.156 4.078-1.891 5.578-2.031-.094.5-.156 1.016-.203 1.531-.547 3.969-2.344 5.484-2.344 5.484-.5-.453-.969-.938-1.406-1.453-.766.859-1.625 1.578-2.313 2.031.172-.375.313-.781.453-1.156 1.156-3.031 1.469-5.891 1.469-5.891.031.016.016.328-.016.531zm2.813-7.25c.781.016 1.578.109 2.359.328-1.688 1.172-3.156 2.984-3.625 3.469-.156-1.156-.219-2.344-.219-3.531 0-.094.016-.188.016-.281.547.016 1.078.016 1.469.016zm-.219 1.469c.391 0 .781.016 1.156.031-1.094.938-2.266 2.313-2.844 3.188-.047-.484-.078-.969-.078-1.453 0-.578.047-1.156.125-1.734.547-.031 1.094-.031 1.641-.031z"/>
      </svg>
    )
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
]

function FadeInSection({ children, delay = 0 }) {
  const { ref, isVisible } = useFadeIn({ threshold: 0.1, delay })

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function StaggerItem({ children, index }) {
  const { ref, isVisible } = useFadeIn({ threshold: 0.1, delay: index * 80 })

  return (
    <div
      ref={ref}
      className={`stagger-item ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {children}
    </div>
  )
}

function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero section">
        <div className="container">
          <FadeInSection delay={0}>
            <h1 className="page-title">联系我</h1>
          </FadeInSection>
          <FadeInSection delay={100}>
            <p className="page-subtitle">期待与你的交流与合作</p>
          </FadeInSection>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <FadeInSection delay={0}>
              <div className="contact-info">
                <h2 className="contact-section-title">联系方式</h2>
                <p className="contact-desc">
                  如果你有任何问题、合作意向或只是想打个招呼，
                  欢迎通过以下方式联系我。我会尽快回复。
                </p>
                <div className="contact-email">
                  <span className="contact-email-label">邮箱</span>
                  <a href="mailto:hello@example.com" className="contact-email-link">
                    hello@example.com
                  </a>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div className="contact-social">
                <h2 className="contact-section-title">社交媒体</h2>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <StaggerItem key={link.name} index={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        title={link.name}
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
