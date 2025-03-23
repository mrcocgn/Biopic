import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useTranslation } from "react-i18next";
import "../styles/AuthForm.css";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      console.error("❌ Error signing up:", error.message);
    } else {
      console.log("✅ Sign-up successful:", data);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      console.error("❌ Error signing in:", error.message);
    } else {
      console.log("✅ Sign-in successful:", data);
    }
  };

  const handleOAuthSignIn = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
    });
    if (error) {
      console.error(`❌ OAuth error (${provider}):`, error.message);
    } else {
      console.log(`➡️ Redirecting to ${provider} OAuth flow...`);
    }
  };

  return (
    <div id="auth-form">
      <form className="auth-form" onSubmit={handleEmailSignIn}>
        <input
          type="email"
          placeholder={t('auth-form.email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('auth-form.password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {t('auth-form.login')}
        </button>
        <button type="button" onClick={handleEmailSignUp} disabled={loading}>
          {t('auth-form.register')}
        </button>
      </form>

      <div className="oauth-buttons">
        <button
          type="button"
          className="google-btn"
          onClick={() => handleOAuthSignIn("google")}
        >
          <img src="/icons/google.svg" alt="Google Logo" />
          <span>{t("auth-form.google")}</span>
        </button>
        
        <p id="or">{t("auth-form.or")}</p>
        
        <button
          type="button"
          className="github-btn"
          onClick={() => handleOAuthSignIn("github")}
        >
          <img src="/icons/github.svg" alt="GitHub Logo" />
          <span>{t("auth-form.github")}</span>
        </button>
      </div>
    </div>
  );
}
