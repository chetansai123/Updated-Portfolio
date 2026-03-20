import { useState } from 'react'
import './Career.css'
import { experience } from '../data'

export default function Career() {
  const [expandedCards, setExpandedCards] = useState({})
  const [selectedRoles, setSelectedRoles] = useState({})
  const [expandedHighlights, setExpandedHighlights] = useState({})

  const toggleCard = (companyName) => {
    setExpandedCards(prev => ({
      ...prev,
      [companyName]: !prev[companyName]
    }))
  }

  const toggleRole = (companyName, roleId) => {
    const currentRole = selectedRoles[companyName]
    const isOpen = expandedCards[companyName]
    
    // If card is closed, open it and select this role
    if (!isOpen) {
      setExpandedCards(prev => ({
        ...prev,
        [companyName]: true
      }))
      setSelectedRoles(prev => ({
        ...prev,
        [companyName]: roleId
      }))
      setExpandedHighlights(prev => ({
        ...prev,
        [roleId]: true
      }))
    } 
    // If card is open and clicking same role, close it
    else if (currentRole === roleId) {
      setExpandedCards(prev => ({
        ...prev,
        [companyName]: false
      }))
      setSelectedRoles(prev => ({
        ...prev,
        [companyName]: null
      }))
      setExpandedHighlights(prev => ({
        ...prev,
        [roleId]: false
      }))
    }
    // If card is open and clicking different role, switch to it and open highlights
    else {
      setSelectedRoles(prev => ({
        ...prev,
        [companyName]: roleId
      }))
      setExpandedHighlights(prev => ({
        ...prev,
        [currentRole]: false,
        [roleId]: true
      }))
    }
  }

  const toggleHighlights = (roleId) => {
    setExpandedHighlights(prev => ({
      ...prev,
      [roleId]: !prev[roleId]
    }))
  }

  return (
    <section className="section" id="career">
      <h2 className="sec-title fu">Career Journey</h2>
      {experience.map((exp) => {
        const isOpen = expandedCards[exp.company] || false
        const selectedRole = selectedRoles[exp.company] || null

        return (
          <div className="career-card fu" key={exp.company}>
            <div className="cc-top">
              <div className="cc-logo">🏢</div>
              <div className="cc-info">
                <div className="cc-co">{exp.company}</div>
                <div className="cc-loc">📍 {exp.location}</div>
                <div className="rpills">
                  {exp.roles.map((r) => (
                    <span 
                      key={r.id} 
                      className={`rp ${selectedRole === r.id ? 'on' : ''}`}
                      onClick={() => toggleRole(exp.company, r.id)}
                    >
                      {r.title}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                className="cc-btn" 
                onClick={() => toggleCard(exp.company)}
              >
                {isOpen ? '∧' : '∨'}
              </button>
            </div>
            {isOpen && (
              <div className="tl">
                {exp.roles.map((r) => (
                  <div 
                    key={r.id} 
                    className={`tr ${selectedRole === r.id ? 'open' : ''}`}
                  >
                    <div className="tdot"><div className="tdot-in" /></div>
                    <div className="tr-title">{r.title}</div>
                    <div className="tr-date">📅 {r.period}</div>
                    <div 
                      className="tr-view"
                      onClick={() => toggleHighlights(r.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      View Highlights <span className={`tr-chev ${expandedHighlights[r.id] ? 'expanded' : ''}`}>▾</span>
                    </div>
                    {expandedHighlights[r.id] && (
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
            )}
          </div>
        )
      })}
    </section>
  )
}