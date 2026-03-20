import './Skills.css'
import { skills } from '../data'
export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="sec-title fu">Skills</h2>
      {skills.map((g, i) => (
        <div className="sg fu" key={i}>
          <div className="sg-lbl">{g.label}</div>
          <div className="sg-tags">
            {g.tags.map((t, j) => <span className="sg-tag" key={j}><span className="sg-dot" />{t}</span>)}
          </div>
        </div>
      ))}
    </section>
  )
}