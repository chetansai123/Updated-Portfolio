import './Education.css'
import { education } from '../data'
export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="sec-title fu">Education</h2>
      {education.map((e, i) => (
        <div className="edu-c fu" key={i}>
          <div className="edu-ico">{e.icon}</div>
          <div>
            <div className="edu-deg">{e.degree}</div>
            <div className="edu-sch">{e.school}</div>
            <div className="edu-loc">{e.location}</div>
            <div className="edu-date">📅 {e.period}</div>
          </div>
        </div>
      ))}
    </section>
  )
}