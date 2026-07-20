import { useState } from 'react'
import './Career.css'
import { experience } from '../data'

export default function Career() {
  const [openCards, setOpenCards] = useState({})
  const [selectedRoles, setSelectedRoles] = useState(() =>
    Object.fromEntries(experience.map((e) => [e.company, e.roles[0]?.id]))
  )

  const openCard = (company) => {
    setOpenCards((prev) => ({ ...prev, [company]: true }))
  }

  const closeCard = (company) => {
    setOpenCards((prev) => ({ ...prev, [company]: false }))
  }

  const selectRole = (company, roleId, e) => {
    e.stopPropagation()
    setSelectedRoles((prev) => ({ ...prev, [company]: roleId }))
    openCard(company)
  }

  return (
    <section className="section" id="career">
      <h2 className="sec-title fu">Career Journey</h2>
      {experience.map((exp) => {
        const isOpen = openCards[exp.company] || false
        const selectedRole = selectedRoles[exp.company]

        return (
          <div
            className="career-card fu"
            key={exp.company}
            onMouseEnter={() => openCard(exp.company)}
            onMouseLeave={() => closeCard(exp.company)}
          >
            <div className="cc-top" onClick={() => openCard(exp.company)}>
              <div className="cc-logo">🏢</div>
              <div className="cc-info">
                <div className="cc-co">{exp.company}</div>
                <div className="cc-loc">📍 {exp.location}</div>
                <div className="rpills">
                  {exp.roles.map((r) => (
                    <span
                      key={r.id}
                      className={`rp ${selectedRole === r.id ? 'on' : ''}`}
                      onClick={(e) => selectRole(exp.company, r.id, e)}
                    >
                      {r.title}
                    </span>
                  ))}
                </div>
              </div>
              <button className="cc-btn" tabIndex={-1} aria-hidden="true">
                {isOpen ? '∧' : '∨'}
              </button>
            </div>
            <div className={`cc-collapse ${isOpen ? 'open' : ''}`}>
              <div className="cc-collapse-inner">
                <div className="tl">
                  {exp.roles.map((r) => (
                    <div
                      key={r.id}
                      className={`tr ${selectedRole === r.id ? 'open' : ''}`}
                    >
                      <div className="tdot"><div className="tdot-in" /></div>
                      <div className="tr-title">{r.title}</div>
                      <div className="tr-date">📅 {r.period}</div>
                      {selectedRole === r.id && (
                        <div className="tr-body">
                          <ul>
                            {r.highlights.map((h, j) => (
                              <li key={j}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
