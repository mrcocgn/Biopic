import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'


export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailSignUp = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) {
      console.error('Error signing up:', error.message)
    } else {
      console.log('Sign-up successful:', data)
    }
  }

  const handleEmailSignIn = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      console.error('Error signing in:', error.message)
    } else {
      console.log('Sign-in successful:', data)
    }
  }

  const handleOAuthSignIn = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) {
      console.error(`Error signing in with ${provider}:`, error.message)
    } else {
      console.log(`Sign-in with ${provider} successful:`, data)
    }
  }

  return (
    <div>
      <form onSubmit={handleEmailSignIn}>
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
        <button type="submit">Einloggen</button>
        <button onClick={handleEmailSignUp}>Registrieren</button>
      </form>
      <button onClick={() => handleOAuthSignIn('google')}>Mit Google einloggen</button>
      <button onClick={() => handleOAuthSignIn('github')}>Mit GitHub einloggen</button>
      <button onClick={() => handleOAuthSignIn('instagram')}>Mit Instagram einloggen</button>
    </div>
  )
}

