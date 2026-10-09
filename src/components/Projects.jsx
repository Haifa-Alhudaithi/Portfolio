import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__list">
        {projects.map((project) => (
          <article key={project.title} className="project">
            <div className="project__header">
              <img src={project.icon} alt="" className="project__icon" />
              <h3>{project.title}</h3>
            </div>

            <p>{project.description}</p>

            {project.tags && (
              <ul className="project__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}

            <div className="project__links">
              {project.live && (
                <a className="btn" href={project.live} target="_blank" rel="noreferrer">
                  {project.liveLabel || 'Live Site'}
                </a>
              )}
              {project.demo && (
                <a className="btn" href={project.demo} target="_blank" rel="noreferrer">
                  Demo Video
                </a>
              )}
              {project.code && (
                <a className="btn" href={project.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
              {project.pdf && (
                <a className="btn" href={project.pdf} target="_blank" rel="noreferrer">
                  PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}