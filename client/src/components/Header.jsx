import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  return (
    <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <h1>marcos.ilgi</h1>
      <LanguageSwitcher />
    </header>
  );
}

export default Header;