// Datei: client/src/components/RegistryPanel.jsx
import { useState } from 'react'
import './RegistryPanel.css'

export default function RegistryPanel() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="registry-toggle" onClick={() => setOpen(true)}>
        📋 Registry
      </button>

      <aside className={`registry-panel ${open ? 'open' : ''}`}>
        <div className="registry-panel-inner">
          <button className="registry-close" onClick={() => setOpen(false)}>
            ✖
          </button>

          <div className="registry-content">
            <h2>Join the Registry</h2>
            <p>Stay connected, get the newsletter, or book an appointment.</p>

            <form>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" required />
              <select>
                <option value="newsletter">Newsletter</option>
                <option value="booking">Booking</option>
                <option value="general">General</option>
              </select>
              <button type="submit">Register</button>
            </form>

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
