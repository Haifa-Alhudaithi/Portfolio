import { contact } from '../data.js'
import contactIcon from '../assets/icons/contact.png'
import emailIcon from '../assets/icons/email.png'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8 8.25h4.3v2.02h.06c.6-1.13 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23H8V8.25z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__header">
        <img src={contactIcon} alt="" />
        <h2>Contact</h2>
      </div>
      <p>Feel free to reach out — I'm always open to new opportunities and conversations.</p>
      <div className="contact__links">
        <a className="btn" href={`mailto:${contact.email}`}>
          <img src={emailIcon} alt="" />
          {contact.email}
        </a>
        <a className="btn" href={contact.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </section>
  )
}