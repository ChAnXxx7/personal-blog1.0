import React from 'react'
import { useFadeIn } from '../utils/animation'
import './Favorites.css'

const favorites = {
  books: [
    { title: '设计心理学', author: '唐纳德·诺曼', desc: '理解用户行为的设计经典' },
    { title: '简约至上', author: '贾尔斯·科尔伯恩', desc: '追求简单设计的理念与方法' },
    { title: '思考，快与慢', author: '丹尼尔·卡尼曼', desc: '理解人类决策的必读书籍' },
    { title: '永恒的终结', author: '艾萨克·阿西莫夫', desc: '关于时间与选择的科幻思考' },
  ],
  documentaries: [
    { title: '抽象：设计的艺术', desc: '探讨各领域设计师的创作过程' },
    { title: '设计天才', desc: '传奇设计师的职业生涯回顾' },
  ],
  podcasts: [
    { title: 'Anyway 播客', desc: '关于创意和职业发展的对话' },
    { title: '味 opt 的播客', desc: '设计师视角的产品与生活讨论' },
  ]
}

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

function Favorites() {
  return (
    <div className="favorites">
      <section className="favorites-hero section">
        <div className="container">
          <FadeInSection delay={0}>
            <h1 className="page-title">收藏夹</h1>
          </FadeInSection>
          <FadeInSection delay={100}>
            <p className="page-subtitle">书籍、纪录片、播客——精神的养分</p>
          </FadeInSection>
        </div>
      </section>

      <section className="favorites-content section">
        <div className="container">
          <div className="favorites-grid">
            <FadeInSection delay={0}>
              <div className="favorite-section">
                <div className="favorite-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                  <h2 className="favorite-title">书籍</h2>
                </div>
                <div className="favorite-list">
                  {favorites.books.map((book, index) => (
                    <StaggerItem key={index} index={index}>
                      <div className="favorite-item">
                        <div className="favorite-item-content">
                          <h3 className="favorite-item-title">{book.title}</h3>
                          <div className="favorite-item-meta">{book.author}</div>
                          <p className="favorite-item-desc">{book.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div className="favorite-section">
                <div className="favorite-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                    <line x1="7" y1="2" x2="7" y2="22"/>
                    <line x1="17" y1="2" x2="17" y2="22"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <line x1="2" y1="7" x2="7" y2="7"/>
                    <line x1="2" y1="17" x2="7" y2="17"/>
                    <line x1="17" y1="17" x2="22" y2="17"/>
                    <line x1="17" y1="7" x2="22" y2="7"/>
                  </svg>
                  <h2 className="favorite-title">纪录片</h2>
                </div>
                <div className="favorite-list">
                  {favorites.documentaries.map((doc, index) => (
                    <StaggerItem key={index} index={index}>
                      <div className="favorite-item">
                        <div className="favorite-item-content">
                          <h3 className="favorite-item-title">{doc.title}</h3>
                          <p className="favorite-item-desc">{doc.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="favorite-section">
                <div className="favorite-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                  <h2 className="favorite-title">播客</h2>
                </div>
                <div className="favorite-list">
                  {favorites.podcasts.map((podcast, index) => (
                    <StaggerItem key={index} index={index}>
                      <div className="favorite-item">
                        <div className="favorite-item-content">
                          <h3 className="favorite-item-title">{podcast.title}</h3>
                          <p className="favorite-item-desc">{podcast.desc}</p>
                        </div>
                      </div>
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

export default Favorites
