import { useEffect, useMemo, useState } from 'react'
import './Hero.css'
import { meta, projects } from '../data'

const LI = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const GH = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>

const cubeTransforms = [['-8deg','0deg'],['-8deg','-90deg'],['-8deg','-180deg'],['-8deg','90deg'],['-98deg','0deg'],['82deg','0deg']]

export default function Hero() {
  const featuredProjects = useMemo(() => projects.slice(0, 6), [])
  const [activeFace, setActiveFace] = useState(0)
  const [paused, setPaused] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const activeProject = featuredProjects[activeFace]

  useEffect(() => {
    if (paused || drawerOpen) return undefined
    const timer = window.setInterval(() => setActiveFace(current => (current + 1) % featuredProjects.length), 2600)
    return () => window.clearInterval(timer)
  }, [paused, drawerOpen, featuredProjects.length])

  const [rotateX, rotateY] = cubeTransforms[activeFace]
  const openProject = () => { setPaused(true); setDrawerOpen(true) }
  const closeProject = () => { setDrawerOpen(false); setPaused(false) }

  return (
    <section className="section hero-section" id="hero">
      <div className={`hero-stage fu in ${drawerOpen ? 'drawer-open' : ''}`}>
        <div className="hero-copy">
          <div className="hero-top">
            <a className="hsoc" href={meta.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LI /></a>
            <a className="hsoc" href={meta.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GH /></a>
          </div>
          <div className="hero-role">JavaScript full-stack engineer</div>
          <h1 className="hero-name">{meta.name}</h1>
          <div className="hero-email">{meta.email}</div>
          <p className="hero-bio">{meta.bio}</p>
        </div>

        <div className="hero-showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => { if (!drawerOpen) setPaused(false) }}>
          <span className="hero-orbit hero-orbit-top">Frontend <i>React</i></span>
          <span className="hero-orbit hero-orbit-right">Backend <i>Node.js</i></span>
          <span className="hero-orbit hero-orbit-bottom">End-to-end <i>ownership</i></span>
          <button className="hero-cube-scene" type="button" onClick={openProject} aria-label={`Open ${activeProject.title} project details`}>
            <span className="hero-cube-shadow" />
            <span className="hero-cube" style={{ '--cube-rx': rotateX, '--cube-ry': rotateY }}>
              {featuredProjects.map((project, index) => (
                <span className={`hero-cube-face hero-cube-face-${index + 1}`} key={project.title}>
                  <img src={project.img} alt="" />
                  <span className="hero-cube-glass" />
                  <span className="hero-cube-title">{project.title}</span>
                </span>
              ))}
            </span>
          </button>
          <div className="hero-cube-controls" aria-hidden="true">
            {featuredProjects.map((project, index) => <span className={index === activeFace ? 'active' : ''} key={project.title} />)}
          </div>
          <span className="hero-cube-hint">Hover to pause · click for project links</span>
        </div>

        <aside className="hero-project-drawer" aria-hidden={!drawerOpen}>
          <button className="hero-drawer-close" type="button" onClick={closeProject} aria-label="Close project details">×</button>
          <span className="hero-drawer-count">{String(activeFace + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}</span>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.desc}</p>
          <div className="hero-drawer-tags">
            {activeProject.stack.slice(0, 5).map(item => <span key={item}>{item}</span>)}
          </div>
          <a className="hero-drawer-link" href={activeProject.link} target="_blank" rel="noreferrer">{activeProject.link.includes('github.com') ? 'View source' : 'Open live project'} <span>↗</span></a>
          <a className="hero-drawer-all" href="#projects" onClick={closeProject}>Browse all projects</a>
        </aside>
      </div>

      <div className="hero-btns fu">
        <a href="#projects" className="btn-d">Explore My Work →</a>
        <a href={meta.resume} className="btn-l" target="_blank" rel="noreferrer">View Resume →</a>
      </div>
    </section>
  )
}
