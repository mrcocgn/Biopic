// src/components/AuthForm.jsx
import { getSupabaseClient } from '../lib/supabaseClient'
import { useState } from 'react'

const supabase = getSupabaseClient()

export function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleEmailLogin(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else alert('Eingeloggt!')
  }

  async function handleOAuthLogin(provider) {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) alert(error.message)
  }

  return (
    <div>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login / Registrierung</button>
      </form>

      <hr />

      <button onClick={() => handleOAuthLogin('google')}>Login mit Google</button>
      <button onClick={() => handleOAuthLogin('github')}>Login mit GitHub</button>
      <button onClick={() => handleOAuthLogin('instagram')}>Login mit Instagram</button>
    </div>
  )
}
