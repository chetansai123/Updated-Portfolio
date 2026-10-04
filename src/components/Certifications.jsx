import { useState } from 'react'
import './Certifications.css'
import { certifications } from '../data'

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = certifications[activeIndex]
  const previous = certifications[(activeIndex + certifications.length - 1) % certifications.length]
  const next = certifications[(activeIndex + 1) % certifications.length]

  return (
    <section className="section" id="certifications">
      <div className="cert-heading-row">
        <h2 className="sec-title fu">Certifications</h2>
        <p className="cert-intro fu">A small record of the work I’ve put in outside the job.</p>
      </div>

      <div className="cert-viewer fu">
        <div className="cert-gallery" aria-live="polite">
          <div className="cert-ghost cert-ghost-prev" aria-hidden="true"><img src={previous.img} alt="" /></div>
          <div className="cert-feature">
            <img src={active.img} alt={active.name} />
            <span className="cert-frame-shine" />
          </div>
          <div className="cert-ghost cert-ghost-next" aria-hidden="true"><img src={next.img} alt="" /></div>
        </div>

        <div className="cert-detail">
          <div className="cert-kicker"><span>{String(activeIndex + 1).padStart(2, '0')} / {String(certifications.length).padStart(2, '0')}</span><span>Verified credential</span></div>
          <h3>{active.name}</h3>
          <div className="cert-org">{active.org}</div>
          <div className="cert-date">{active.date}</div>
          <p>A verified learning milestone included in my engineering journey.</p>
          <a className="cert-open" href={active.link} target="_blank" rel="noreferrer">Open credential <span>↗</span></a>
          <div className="cert-controls">
            <button type="button" onClick={() => setActiveIndex((activeIndex + certifications.length - 1) % certifications.length)} aria-label="Previous certificate">←</button>
            {certifications.map((item, index) => <button type="button" className={index === activeIndex ? 'active' : ''} onClick={() => setActiveIndex(index)} aria-label={`Show ${item.name}`} key={item.name}><span /></button>)}
            <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % certifications.length)} aria-label="Next certificate">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
