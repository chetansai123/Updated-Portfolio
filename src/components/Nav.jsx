import { useState, useEffect, useRef } from 'react'
import './Nav.css'
import { meta } from '../data'

export default function Nav({ dark, setDark }) {
  const [active, setActive] = useState('hero')
  const ringRef = useRef(null)

  useEffect(() => {
    function updateRing() {
      const ring = ringRef.current
      if (!ring) return
      const total = document.body.scrollHeight - window.innerHeight
      const pct = total > 0 ? Math.min(window.scrollY / total, 1) : 0
      if (pct < 0.01) { ring.style.background = 'var(--nbg)'; return }
      let r, g, b
      if (pct <= 0.9) { r = 59; g = 110; b = 232 }
      else {
        const t = (pct - 0.9) / 0.1
        r = Math.round(59 + t * (238 - 59))
        g = Math.round(110 + t * (59 - 110))
        b = Math.round(232 + t * (59 - 232))
      }
      const p = pct * 100
      ring.style.background = `conic-gradient(from -90deg, rgb(${r},${g},${b}) 0% ${p}%, var(--nbg) ${p}% 100%)`
    }

    function onScroll() {
      updateRing()
      const secs = document.querySelectorAll('section[id]')
      let cur = ''
      secs.forEach(s => { if (window.scrollY >= s.offsetTop - 80) cur = s.id })
      setActive(cur)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    setTimeout(updateRing, 100)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [['hero','Home'],['career','Career'],['projects','Projects'],['certifications','Certs'],['contact','Contact']]

  return (
    <div className="nav-wrap">
      <div className="nav-ring" ref={ringRef}>
        <div className="nav-pill">
          <a className="nav-logo" href="#">CS</a>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`nav-link ${active === id ? 'active' : ''}`}>{label}</a>
          ))}
          <div className="nav-sep" />
          <a className="nav-gh" href="https://github.com/chetansai123" target="_blank" rel="noreferrer">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.216.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a className="nav-resume" href={meta.resume} target="_blank">
            <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6z"/></svg>
            Resume
          </a>
          <button className="theme-btn" onClick={() => setDark(d => !d)}>{dark ? '☀️' : '🌙'}</button>
        </div>
      </div>
    </div>
  )
}