import './Certifications.css'
import { certifications } from '../data'
export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <h2 className="sec-title fu">Certifications</h2>
      <div className="cert-scroll">
        {certifications.map((c, i) => (
          <a className="cert-c fu" href={c.link} key={i} target="_blank" rel="noreferrer">
            <div className="cert-img">
              <img src={c.img} alt={c.name} onError={e => { e.target.style.display = 'none' }} />
            </div>
            <div className="cert-body">
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org}</div>
              <div className="cert-date">{c.date}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}