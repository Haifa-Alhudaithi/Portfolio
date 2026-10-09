import { about, skills } from '../data.js'

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <p className="about__bio">{about.bio}</p>

      <div className="about__skills">
        {Object.entries(skills).map(([groupName, items]) => (
          <div key={groupName} className="skills__group">
            <h3>{groupName}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}   