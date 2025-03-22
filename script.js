// script.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://YOUR_PROJECT.supabase.co';
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById('subscribe-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const feedback = document.getElementById('feedback');

  const { error } = await supabase.from('subscribers').insert([{ email }]);

  if (error) {
    feedback.textContent = 'Fehler beim Eintragen. Bitte versuch es später erneut.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Danke! Du bist jetzt eingetragen.';
    feedback.style.color = 'green';
    document.getElementById('email').value = '';
  }
});
