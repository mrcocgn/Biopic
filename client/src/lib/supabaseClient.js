import { createClient } from '@supabase/supabase-js'

export function getSupabaseClient() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase ENV variables are missing')
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}
