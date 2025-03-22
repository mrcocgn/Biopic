import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  return (
    <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <h1>marcosilgi</h1>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;