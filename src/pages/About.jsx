import React from 'react'
import { useFadeIn } from '../utils/animation'
import './About.css'

const experiences = [
  {
    period: '2021 - 至今',
    role: '高级B端设计师',
    company: '某科技公司',
    desc: '负责企业级SaaS产品设计，建立设计系统'
  },
  {
    period: '2018 - 2021',
    role: 'B端设计师',
    company: '某互联网公司',
    desc: '参与B端产品设计与用户研究工作'
  },
]

const education = [
  {
    period: '2014 - 2018',
    degree: '学士学位',
    major: '工业设计',
    school: '某大学'
  },
]

const skills = [
  { category: '设计工具', items: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects'] },
  { category: '协作工具', items: ['Notion', 'Miro', 'Figma', 'Confluence', 'Jira'] },
  { category: '前端技术', items: ['HTML/CSS', 'JavaScript', 'React', 'Vue', 'Tailwind CSS'] },
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

function About() {
  return (
    <div className="about">
      <section className="about-hero section">
        <div className="container">
          <FadeInSection delay={0}>
            <h1 className="page-title">关于我</h1>
          </FadeInSection>
          <FadeInSection delay={100}>
            <p className="page-subtitle">探索设计本质，追求简洁有力</p>
          </FadeInSection>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-main">
              <FadeInSection delay={0}>
                <div className="about-section">
                  <h2 className="about-section-title">个人简介</h2>
                  <div className="about-text">
                    <p>我是一名专注于B端产品的设计师，拥有多年企业级产品设计经验。</p>
                    <p>我相信好的设计是服务于业务的，同时也是简洁而有力的。在工作中，我注重从用户需求出发，通过系统化的设计方法，为企业打造高效、稳定的产品体验。</p>
                    <p>持续学习是我一直坚持的态度。我正在学习前端开发、数据分析等领域的知识，希望能够更好地理解产品全链路，成为更全面的设计师。</p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={100}>
                <div className="about-section">
                  <h2 className="about-section-title">工作经历</h2>
                  <div className="timeline">
                    {experiences.map((exp, index) => (
                      <StaggerItem key={index} index={index}>
                        <div className="timeline-item">
                          <div className="timeline-period">{exp.period}</div>
                          <div className="timeline-content">
                            <h3 className="timeline-role">{exp.role}</h3>
                            <div className="timeline-company">{exp.company}</div>
                            <p className="timeline-desc">{exp.desc}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="about-section">
                  <h2 className="about-section-title">教育背景</h2>
                  <div className="timeline">
                    {education.map((edu, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-period">{edu.period}</div>
                        <div className="timeline-content">
                          <h3 className="timeline-role">{edu.degree}</h3>
                          <div className="timeline-company">{edu.major} · {edu.school}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="about-sidebar">
              <FadeInSection delay={300}>
                <div className="sidebar-card">
                  <h3 className="sidebar-title">专业技能</h3>
                  {skills.map((skill, index) => (
                    <StaggerItem key={index} index={index}>
                      <div className="skill-category">
                        <div className="skill-category-title">{skill.category}</div>
                        <div className="skill-items">
                          {skill.items.map(item => (
                            <span key={item} className="skill-item">{item}</span>
                          ))}
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
