export default function Nav({ theme, onToggleTheme }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav__mark">HA</a>
      <div className="nav__right">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button onClick={onToggleTheme} className="theme-toggle">
          {theme === 'light' ? '☾' : '☀'}
        </button>
      </div>
    </nav>
  )
}