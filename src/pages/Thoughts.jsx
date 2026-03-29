import React from 'react'
import { useFadeIn } from '../utils/animation'
import './Thoughts.css'

const thoughts = [
  {
    title: 'B端设计的本质',
    date: '2024-01-15',
    excerpt: 'B端设计的核心是效率和稳定。与C端追求的流畅体验不同，B端产品需要帮助用户高效完成工作任务。',
    category: '设计思考'
  },
  {
    title: '从C到B：设计师的转型之路',
    date: '2023-11-20',
    excerpt: '从消费级产品转向企业级产品，不仅仅是目标用户的改变，更是一种思维方式的转变。',
    category: '职业成长'
  },
  {
    title: '设计系统的价值',
    date: '2023-09-08',
    excerpt: '设计系统不仅是组件库和规范文档，更是一种团队协作语言和效率工具。',
    category: '设计方法'
  },
  {
    title: '关于学习前端',
    date: '2023-06-12',
    excerpt: '作为设计师学习前端，不是为了转行，而是为了更好地理解设计与技术的边界。',
    category: '学习笔记'
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
  const { ref, isVisible } = useFadeIn({ threshold: 0.1, delay: index * 100 })

  return (
    <div
      ref={ref}
      className={`stagger-item ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  )
}

function Thoughts() {
  return (
    <div className="thoughts">
      <section className="thoughts-hero section">
        <div className="container">
          <FadeInSection delay={0}>
            <h1 className="page-title">想法与感悟</h1>
          </FadeInSection>
          <FadeInSection delay={100}>
            <p className="page-subtitle">记录思考，沉淀成长</p>
          </FadeInSection>
        </div>
      </section>

      <section className="thoughts-content section">
        <div className="container">
          <div className="thoughts-list">
            {thoughts.map((thought, index) => (
              <StaggerItem key={index} index={index}>
                <article className="thought-card">
                  <div className="thought-meta">
                    <span className="thought-category">{thought.category}</span>
                    <span className="thought-date">{thought.date}</span>
                  </div>
                  <h2 className="thought-title">{thought.title}</h2>
                  <p className="thought-excerpt">{thought.excerpt}</p>
                  <div className="thought-action">
                    <span>阅读全文</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Thoughts
