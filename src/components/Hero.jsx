import laptopGif from '../assets/icons/laptop.gif'

export default function Hero({ name, role, intro }) {
  return (
    <header className="hero">
      <div className="hero__text">
        <p className="hero__role">{role}</p>
        <h1 className="hero__name">{name}</h1>
        <p className="hero__intro">{intro}</p>
      </div>
      <img src={laptopGif} alt="" className="hero__icon" />
    </header>
  )
}