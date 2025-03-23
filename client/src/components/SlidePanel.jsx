import { useState } from 'react'
import '../styles/SlidePanel.css'

export default function SlidePanel({ children }) {
    const [isOpen, setIsOpen] = useState(false)
  
    const togglePanel = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <>
        <button onClick={togglePanel} className="toggle-button">
          ⚙️
        </button>
        <aside className={`slide-panel ${isOpen ? 'open' : ''}`}>
          <button onClick={togglePanel} className="close-button">
            ✖️
          </button>
          {children}
        </aside>
      </>
    )
  }
