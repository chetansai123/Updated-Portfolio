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
              <div className="cert-kicker"><span>{String(i + 1).padStart(2, '0')}</span><span>Open credential ↗</span></div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org}</div>
              <div className="cert-date">{c.date}</div>
              <p className="cert-note">A verified learning milestone included in my engineering journey.</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
