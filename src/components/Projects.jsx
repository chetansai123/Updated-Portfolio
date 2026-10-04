import './Projects.css'
import { projects } from '../data'
export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <h2 className="sec-title fu">Works &amp; Projects</h2>
      <p className="projects-intro fu">Selected builds, stacked like working notes. Scroll to browse the deck.</p>
      <div className="proj-grid">
        {projects.map((p, i) => (
          <a className="proj-c fu" href={p.link} key={i} target="_blank" rel="noreferrer" style={{ '--stack-index': i }}>
            <div className="proj-img">
              <img src={p.img} alt={p.title}
                onError={e => { e.target.onerror = null; e.target.src = p.fallback }} />
              <span className="proj-img-label">{p.title}</span>
            </div>
            <div className="proj-body">
              <div className="proj-kicker">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{p.link.includes('github.com') ? 'View source' : 'Open live project'}</span>
              </div>
              <div className="proj-head">
                <div className="proj-name">{p.title}</div>
                <span className="proj-arr">↗</span>
              </div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-tags">
                {p.stack.map((s, j) => <span className="proj-tag" key={j}>{s}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
