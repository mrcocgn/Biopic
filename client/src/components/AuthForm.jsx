import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import '../styles/AuthForm.css'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEmailSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    setLoading(false)
    if (error) {
      console.error('❌ Error signing up:', error.message)
    } else {
      console.log('✅ Sign-up successful:', data)
    }
  }

  const handleEmailSignIn = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)
    if (error) {
      console.error('❌ Error signing in:', error.message)
    } else {
      console.log('✅ Sign-in successful:', data)
    }
  }

  const handleOAuthSignIn = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    })
    if (error) {
      console.error(`❌ OAuth error (${provider}):`, error.message)
    } else {
      console.log(`➡️ Redirecting to ${provider} OAuth flow...`)
    }
  }

  return (
    <div>
      <form className="auth-form" onSubmit={handleEmailSignIn}>
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
        <button type="submit" disabled={loading}>Einloggen</button>
        <button type="button" onClick={handleEmailSignUp} disabled={loading}>
          Registrieren
        </button>
      </form>

      <div className="oauth-buttons">
        <hr style={{ margin: '2rem 0' }} />
        <button type="button" onClick={() => handleOAuthSignIn('google')}>
          Mit Google einloggen
        </button>
        <button type="button" onClick={() => handleOAuthSignIn('github')}>
          Mit GitHub einloggen
        </button>
        <button type="button" onClick={() => handleOAuthSignIn('instagram')}>
          Mit Instagram einloggen
        </button>
      </div>
    </div>
  )
}
