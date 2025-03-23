import { useState, useEffect } from 'react'
import AuthForm from './AuthForm'
import '../styles/RegistryPanel.css'

export default function RegistryPanel() {
  const [open, setOpen] = useState(false)
  const [hideToggle, setHideToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!open) {
        setHideToggle(window.scrollY > 10)
      }
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [open])  

  const togglePanel = () => setOpen(!open)

  return (
    <>
      <button
        className={`registry-toggle ${hideToggle ? 'hidden' : ''}`}
        onClick={togglePanel}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? '✖' : '☰'}
      </button>

      <aside className={`registry-panel ${open ? 'open' : ''}`}>
        <div className="registry-inner">
          <div className="registry-content">
            <h2>Welcome</h2>
            <p>Sign up for news, booking or contact.</p>
            <AuthForm />
            <div className="language-select">
              <label htmlFor="lang">Language</label>
              <select id="lang">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="tr">Türkçe</option>
                <option value="es">Español</option>
                <option value="ar">عربي</option>
              </select>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
