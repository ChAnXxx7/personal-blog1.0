import React from 'react'
import { useFadeIn } from '../utils/animation'
import './Projects.css'

const projects = [
  {
    title: '企业数据中台设计',
    desc: '参与企业级数据中台产品的设计工作，负责数据可视化模块和流程配置模块。该平台帮助企业实现数据的统一管理和分析。',
    tags: ['B端产品', '数据可视化', '企业级SaaS'],
    year: '2023',
    link: '#'
  },
  {
    title: '设计系统搭建',
    desc: '从0到1搭建团队设计系统，建立组件库、设计规范和设计令牌。提升团队协作效率，确保产品体验一致性。',
    tags: ['设计系统', '组件库', '规范文档'],
    year: '2022',
    link: '#'
  },
  {
    title: '智能客服系统',
    desc: '负责智能客服产品的交互设计和用户流程优化。通过组件化设计思维，提升客服工作效率和用户满意度。',
    tags: ['B端产品', '交互设计', 'AI'],
    year: '2022',
    link: '#'
  },
  {
    title: '电商运营后台',
    desc: '参与电商运营后台的改版设计，优化信息架构和交互流程，使运营人员的工作效率显著提升。',
    tags: ['B端产品', '后台系统', '电商'],
    year: '2021',
    link: '#'
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

function Projects() {
  return (
    <div className="projects">
      <section className="projects-hero section">
        <div className="container">
          <FadeInSection delay={0}>
            <h1 className="page-title">项目展示</h1>
          </FadeInSection>
          <FadeInSection delay={100}>
            <p className="page-subtitle">专注于企业级产品的设计与实践</p>
          </FadeInSection>
        </div>
      </section>

      <section className="projects-content section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <StaggerItem key={index} index={index}>
                <article className="project-card">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="project-year">{project.year}</span>
                      <div className="project-tags">
                        {project.tags.map(tag => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-desc">{project.desc}</p>
                  </div>
                  <a href={project.link} className="project-link">
                    <span>查看详情</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                </article>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
