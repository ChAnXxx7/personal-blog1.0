import React from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../utils/animation'
import './Home.css'

const skills = [
  'B端产品设计',
  '用户研究',
  '交互设计',
  '设计系统',
  '前端开发',
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
  const { ref, isVisible } = useFadeIn({ threshold: 0.1, delay: index * 100 })

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

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <FadeInSection delay={0}>
            <div className="hero-badge">B端设计师</div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <h1 className="hero-title">
              用设计解决问题
              <br />
              用代码实现想法
            </h1>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="hero-description">
              专注于企业级产品设计，追求稳定与创新的平衡。
              相信好的设计是简洁而有力的。
            </p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="hero-skills">
              {skills.map((skill, index) => (
                <StaggerItem key={skill} index={index}>
                  <span className="skill-tag">{skill}</span>
                </StaggerItem>
              ))}
            </div>
          </FadeInSection>
          <FadeInSection delay={400}>
            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary">了解更多</Link>
              <Link to="/projects" className="btn btn-secondary">查看项目</Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <FadeInSection>
            <h2 className="section-title">专业领域</h2>
          </FadeInSection>
          <div className="features-grid">
            {['产品设计', '用户研究', '设计系统', '前端开发'].map((title, index) => (
              <StaggerItem key={title} index={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      {index === 0 && <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></>}
                      {index === 1 && <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>}
                      {index === 2 && <><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>}
                      {index === 3 && <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>}
                    </svg>
                  </div>
                  <h3 className="feature-title">{title}</h3>
                  <p className="feature-desc">
                    {index === 0 && '从需求分析到方案落地，专注于打造高效、稳定的B端产品体验。'}
                    {index === 1 && '通过用户访谈、问卷调研、数据分析等方式深入了解用户需求。'}
                    {index === 2 && '建立统一的设计规范和组件库，提升团队协作效率与产品一致性。'}
                    {index === 3 && '具备前端开发能力，能够将设计稿高质量还原并实现交互效果。'}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      <section className="cta section">
        <FadeInSection>
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">想了解更多？</h2>
              <p className="cta-desc">查看我的项目经历、收藏的书单，或者直接联系我</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary">联系我</Link>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  )
}

export default Home
