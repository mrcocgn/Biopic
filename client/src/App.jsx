import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SlidePanel from './components/SlidePanel'
import AuthForm from './components/AuthForm'
import { Analytics } from "@vercel/analytics/react"
import './App.css';

import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <Main />
      <Footer />
      <SlidePanel>
        <AuthForm />
      </SlidePanel>
      <Analytics />
    </div>
  );
}

export default App;
