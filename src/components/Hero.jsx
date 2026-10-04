import { useEffect, useMemo, useRef, useState } from 'react'
import './Hero.css'
import { meta, projects } from '../data'

const LI = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const GH = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>

export default function Hero() {
  const featuredProjects = useMemo(() => projects.slice(0, 6), [])
  const [activeFace, setActiveFace] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [spinDirection, setSpinDirection] = useState(1)
  const workPanelRef = useRef(null)
  const pointerZone = useRef('center')
  const hoveringRef = useRef(false)
  const drawerRef = useRef(false)
  const spinningRef = useRef(false)
  const spinAmount = useRef(1)
  const spinTimer = useRef(null)
  const activeProject = featuredProjects[activeFace]
  const faceProjects = useMemo(() => ({
    front: featuredProjects[activeFace],
    right: featuredProjects[(activeFace + 1) % featuredProjects.length],
    back: featuredProjects[(activeFace + 2) % featuredProjects.length],
    left: featuredProjects[(activeFace + featuredProjects.length - 1) % featuredProjects.length],
    top: featuredProjects[(activeFace + 3) % featuredProjects.length],
    bottom: featuredProjects[(activeFace + 4) % featuredProjects.length],
  }), [activeFace, featuredProjects])

  const stepFace = amount => {
    setActiveFace(current => (current + amount + featuredProjects.length) % featuredProjects.length)
  }

  const startSpin = amount => {
    if (spinningRef.current || drawerRef.current) return
    spinAmount.current = amount
    spinningRef.current = true
    setSpinDirection(amount < 0 ? -1 : 1)
    setIsSpinning(true)
    window.clearTimeout(spinTimer.current)
    spinTimer.current = window.setTimeout(() => {
      stepFace(spinAmount.current)
      spinningRef.current = false
      setIsSpinning(false)
    }, 980)
  }

  useEffect(() => {
    hoveringRef.current = hovering
    drawerRef.current = drawerOpen
  }, [hovering, drawerOpen])

  useEffect(() => {
    const node = workPanelRef.current
    if (!node) return undefined
    let seen = false
    const observer = new IntersectionObserver(entries => {
      if (entries[0]?.isIntersecting && !seen) {
        seen = true
        startSpin(1)
      }
    }, { threshold: .35 })
    observer.observe(node)
    const interval = window.setInterval(() => {
      if (seen && !hoveringRef.current && !drawerRef.current) startSpin(1)
    }, 15000)
    return () => {
      observer.disconnect()
      window.clearInterval(interval)
      window.clearTimeout(spinTimer.current)
    }
  }, [])

  const handlePointerMove = event => {
    const rect = event.currentTarget.getBoundingClientRect()
    if (spinningRef.current) return
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
    const horizontal = Math.abs(x) >= Math.abs(y)
    const nextZone = horizontal ? (x < -.38 ? 'left' : x > .38 ? 'right' : 'center') : (y < -.38 ? 'top' : y > .38 ? 'bottom' : 'center')
    if (nextZone !== pointerZone.current && nextZone !== 'center') {
      if (nextZone === 'right') startSpin(1)
      if (nextZone === 'left') startSpin(-1)
      if (nextZone === 'top') startSpin(2)
      if (nextZone === 'bottom') startSpin(-2)
    }
    pointerZone.current = nextZone
  }

  const enterPointer = event => {
    setHovering(true)
    hoveringRef.current = true
    pointerZone.current = 'center'
    handlePointerMove(event)
  }
  const resetPointer = () => {
    setHovering(false)
    hoveringRef.current = false
    pointerZone.current = 'center'
  }
  const handleCubeKey = event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); startSpin(1) }
    if (event.key === 'ArrowLeft') { event.preventDefault(); startSpin(-1) }
  }
  const openProject = () => setDrawerOpen(true)
  const closeProject = () => setDrawerOpen(false)

  return (
    <section className="section hero-section" id="hero">
      <div className="hero-stage fu in">
        <div className="hero-copy">
          <div className="hero-top">
            <a className="hsoc" href={meta.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LI /></a>
            <a className="hsoc" href={meta.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GH /></a>
          </div>
          <div className="hero-role">Full-stack engineer</div>
          <div className="hero-name-row">
            <h1 className="hero-name">{meta.name}</h1>
            <span className="hero-name-mark" aria-hidden="true">CS</span>
          </div>
          <div className="hero-email">{meta.email}</div>
          <p className="hero-bio">{meta.bio}</p>
        </div>

      </div>

      <div className={`hero-work-panel fu in ${drawerOpen ? 'drawer-open' : ''}`} ref={workPanelRef}>
        <div className="hero-showcase">
          <div className="hero-showcase-label"><span /> Project navigator <b>{String(activeFace + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}</b></div>
          <div className="hero-project-signal hero-project-signal-left"><span>What it does</span><p>{activeProject.desc}</p></div>
          <div className="hero-project-signal hero-project-signal-right"><span>Skills used</span><div>{activeProject.stack.map(item => <b key={item}>{item}</b>)}</div></div>
          <button className="hero-cube-scene" type="button" onPointerEnter={enterPointer} onPointerMove={handlePointerMove} onPointerLeave={resetPointer} onKeyDown={handleCubeKey} onClick={openProject} aria-label={`Open ${activeProject.title} project details`}>
            <span className="hero-cube-shadow" />
            <span className={`hero-cube ${isSpinning ? `is-spinning ${spinDirection > 0 ? 'spin-right' : 'spin-left'}` : ''}`} style={{ '--cube-rx': '-8deg', '--cube-ry': '12deg', '--cube-rz': '0deg' }}>
              <span className="hero-cube-face hero-cube-face-front">
                <img src={faceProjects.front.img} alt={faceProjects.front.title} style={{ objectFit: faceProjects.front.imageFit || 'cover', objectPosition: faceProjects.front.imagePosition || 'center' }} />
                <span className="hero-cube-glass" />
                <span className="hero-cube-title">{activeProject.title}</span>
              </span>
              {['back', 'right', 'left', 'top', 'bottom'].map(side => (
                <span className={`hero-cube-face hero-cube-face-${side} hero-cube-face-ghost`} aria-hidden="true" key={side}>
                  <img src={faceProjects[side].img} alt="" style={{ objectFit: faceProjects[side].imageFit || 'cover', objectPosition: faceProjects[side].imagePosition || 'center' }} />
                  <span className="hero-cube-glass" />
                </span>
              ))}
            </span>
          </button>
          <div className="hero-cube-controls" aria-hidden="true">
            {featuredProjects.map((project, index) => <span className={index === activeFace ? 'active' : ''} key={project.title} />)}
          </div>
          <span className="hero-cube-hint">Move left / right / up / down · click to inspect</span>
        </div>

        <aside className="hero-project-drawer" aria-hidden={!drawerOpen}>
          <button className="hero-drawer-close" type="button" onClick={closeProject} aria-label="Close project details">×</button>
          <span className="hero-drawer-count">{String(activeFace + 1).padStart(2, '0')} / {String(featuredProjects.length).padStart(2, '0')}</span>
          <h2>{activeProject.title}</h2>
          <p>{activeProject.desc}</p>
          <div className="hero-drawer-tags">{activeProject.stack.slice(0, 5).map(item => <span key={item}>{item}</span>)}</div>
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
