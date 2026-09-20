import { useEffect, useState } from 'react'
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaDownload,
  FaPython,
  FaReact,
  FaServer,
} from 'react-icons/fa'
import {
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import {
  brandStats,
  certifications,
  contactDetails,
  education,
  experiences,
  navigation,
  profileImage,
  projects,
  resumePath,
  skills,
  socialLinks,
} from './data'

const techIcons = {
  React: FaReact,
  Django: SiDjango,
  MongoDB: SiMongodb,
  Python: FaPython,
  Tkinter: FaCode,
  SQLite: FaDatabase,
  OpenCV: FaCode,
  PySerial: FaCode,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
  Blockchain: FaServer,
  MySQL: SiMysql,
  'Django REST Framework': SiDjango,
  'REST APIs': FaServer,
}

const educationTimeline = education.map((item) => ({
  title: item.title,
  institution: item.school,
  period: item.meta,
  detail: item.detail,
}))

const certificationTimeline = certifications.map((item) => ({
  title: item.title,
  institution: item.provider,
  period: item.period,
  detail: '',
}))

function LearningTimeline({ entries }) {
  return (
    <div className="learning-timeline">
      {entries.map((item) => (
        <article key={item.title} className="learning-timeline-item">
          <span className="learning-timeline-marker" />
          <div className="learning-timeline-entry">
            <h4>{item.title}</h4>
            <p>{item.institution}</p>
            {item.period ? <span>{item.period}</span> : null}
            {item.detail ? <strong>{item.detail}</strong> : null}
          </div>
        </article>
      ))}
    </div>
  )
}

function SkillItem({ item }) {
  const Icon = item.icon

  return (
    <div className="tech-pill">
      <span className="tech-icon"><Icon /></span>
      <span>{item.name}</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-media" aria-label={project.name}>
        {project.image ? <img src={project.image} alt={project.name} /> : <span>{project.category}</span>}
        {project.liveDemo ? (
          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-media-link">
            Live Demo
          </a>
        ) : project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-media-link">
            GitHub
          </a>
        ) : null}
      </div>

      <div className="project-body">
        <div className="project-header-row">
          <span className="project-kicker">Project {index + 1}</span>
          <span className="project-badge">{project.category}</span>
        </div>

        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="project-tech-group">
          {project.tech.map((tech) => {
            const Icon = techIcons[tech] || FaCode

            return (
              <div key={tech} className="mini-tech">
                <Icon />
                <span>{tech}</span>
              </div>
            )
          })}
        </div>

      </div>
    </article>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.4, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="site-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <nav
            id="site-navigation"
            className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={activeSection.toLowerCase() === item.toLowerCase() ? 'nav-link active' : 'nav-link'}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-space">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Available for work</span>
              <h1>Sharmi S.</h1>
              <h2>Python Full Stack Developer</h2>
              <p>Building practical web experiences with Python and modern web technologies.</p>

              <div className="hero-actions">
                <a href="#projects" className="primary-btn">
                  View My Projects <FaArrowRight />
                </a>
                <a href={resumePath} download className="secondary-btn">
                  Download Resume <FaDownload />
                </a>
              </div>

              <div className="social-row">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-link">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-label="Profile photo composition">
              <div className="portrait-card">
                <img src={profileImage} alt="Sharmi S" />
              </div>
              <div className="floating-tag tag-one">Python</div>
              <div className="floating-tag tag-two">Django</div>
              <div className="floating-tag tag-three">React</div>
            </div>
          </div>
        </section>

        <section id="about" className="section-space section-surface">
          <div className="container">
            <div className="about-layout">
              <div className="about-copy">
                <div className="section-header narrow">
                  <span className="section-kicker">About</span>
                  <h2>About Me</h2>
                </div>

                <p>
                  I'm a Computer Science Engineering graduate focused on Python Full Stack Development. I enjoy building practical web applications from the frontend to the backend, working with APIs and databases, and turning ideas into functional software.
                </p>
                <p>
                  Through internships, training, freelance work, and personal projects, I've gained hands-on experience developing responsive web applications and solving real-world problems.
                </p>
              </div>

              <div className="about-media">
                <div className="video-frame">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    aria-label="About me video"
                  >
                    <source src={`${import.meta.env.BASE_URL}video.mp4`} type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              {brandStats.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-space">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Skills</span>
              <h2>Technologies I work with</h2>
            </div>

            <div className="skills-grid">
              {skills.map((group) => {
                const Icon = group.icon
                return (
                  <div key={group.title} className="skill-group">
                    <div className="skill-header">
                      <span className="skill-icon"><Icon /></span>
                      <h3>{group.title}</h3>
                    </div>
                    <div className="tech-list">
                      {group.items.map((item) => (
                        <SkillItem key={`${group.title}-${item.name}`} item={item} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-space section-surface">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Projects</span>
              <h2>Selected work</h2>
            </div>

            <div className="projects-layout">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-space">
          <div className="container">
            <div className="section-header narrow">
              <span className="section-kicker">Experience</span>
              <h2>Professional journey</h2>
            </div>

            <div className="timeline">
              {experiences.map((item) => (
                <div key={`${item.company}-${item.role}`} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="timeline-company">{item.company}</div>
                    <h3>{item.role}</h3>
                    <span>{item.date}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-space section-surface">
          <div className="container">
            <div className="section-header narrow">
              <span className="section-kicker">Education &amp; Certifications</span>
              <h2>Education &amp; Certifications</h2>
            </div>

            <div className="learning-subsection">
              <h3>🎓 Education</h3>
              <LearningTimeline entries={educationTimeline} />
            </div>

            <div className="learning-subsection certifications-subsection">
              <h3>🏆 Certifications / Training</h3>
              <LearningTimeline entries={certificationTimeline} />
            </div>
          </div>
        </section>

        <section id="contact" className="section-space">
          <div className="container">
            <div className="section-header narrow">
              <span className="section-kicker">Contact</span>
              <h2>Let's Connect</h2>
            </div>

            <div className="contact-wrap">
              <p className="contact-intro">
                Have a project in mind or looking for a Python Full Stack Developer? I'd be happy to connect and discuss how I can help.
              </p>

              <div className="contact-list">
                {contactDetails.map(({ label, value, icon: Icon, href }) => (
                  <div key={label} className="contact-item">
                    <span className="contact-icon"><Icon /></span>
                    <div>
                      <small>{label}</small>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                          {value}
                        </a>
                      ) : (
                        <p>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">Sharmi S.</div>
          <div className="footer-role">Python Full Stack Developer</div>
          <div className="footer-links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            ))}
          </div>
          <p>© 2026 Sharmi S.</p>
        </div>
      </footer>
    </>
  )
}
