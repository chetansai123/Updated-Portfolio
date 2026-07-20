import './Projects.css'
import { projects } from '../data'
export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="sec-title fu">Works &amp; Projects</h2>
      <div className="proj-grid">
        {projects.map((p, i) => (
          <a className="proj-c fu" href={p.link} key={i} target="_blank" rel="noreferrer">
            <div className="proj-img">
              <img src={p.img} alt={p.title}
                onError={e => { e.target.onerror = null; e.target.src = p.fallback }} />
            </div>
            <div className="proj-body">
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