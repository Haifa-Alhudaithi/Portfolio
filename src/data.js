import folderIcon from './assets/icons/folder.png'
import controllerIcon from './assets/icons/controller.png'

export const about = {
  bio: "Software engineering graduate with hands-on experience across full-stack development, backend automation, and data organization. Quick learner who adapts fast to new tools and codebases, works well under pressure, and stays focused on measurable outcomes.",
}

export const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'HTML, CSS, Bootstrap'],
  Frameworks: ['React.js, Vue.js, Node.js', 'Spring Boot, Firebase', 'MongoDB, MySQL'],
  'Design & Game Dev': ['Unity (Game Development)', 'Blender (3D Modeling & Animation)', 'UI/UX Design'],
  Other: ['Requirements Engineering', 'Technical Documentation (SRS)'],
}

export const projects = [
  {
    title: 'Movie Discovery Web App',
    icon: folderIcon,
    description:
      "A self-directed learning project built during my co-op at Neoleap to master Vue.js, Vuetify, and Vuex — the company's core front-end stack. Built the frontend and integrated TheMovieDB API via Axios to deliver real-time movie data, while also gaining hands-on backend development experience with Spring Boot.",
    tags: ['Vue.js', 'Vuetify', 'Vuex', 'Spring Boot'],
    demo: 'https://drive.google.com/file/d/1yfZbpjqoMLSXkeJJx-crGfwhHOdvjnh3/view?usp=sharing',
    code: 'https://github.com/Haifa-Alhudaithi/Movie-web-application-Frontend',
  },
  {
    title: 'Home Key — Graduation Project',
    icon: folderIcon,
    description:
      'A property management platform designed to simplify the experience for both property seekers and owners — enabling users to list, browse, and manage properties, portfolios, and wish lists. Built as a 5-person team senior capstone project. Developed the frontend using HTML, CSS, and JavaScript with Node.js, and contributed to backend functionality alongside the team. Also helped write the full requirements document (SRS), based on real user interviews and workshops.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    live: 'https://homekey-q4jp.onrender.com',
    liveLabel: 'Live Site',
    demo: 'https://www.linkedin.com/posts/haifa-alhudaithi_introducing-home-key-our-senior-project-activity-7150185851384184832-DwUE',
    code: 'https://github.com/Haifa-Alhudaithi/Homekey-web-application',
    pdf: 'https://github.com/Haifa-Alhudaithi/docs/blob/main/docs/HomeKey%20Senior%20Project%20PDF/Homekey%20Senior%20Project.pdf',
  },
  {
    title: 'Game Development',
    icon: controllerIcon,
    description:
      "Games I've designed and developed using Unity, including a 2D shooter built during Coursera coursework.",
    live: 'https://haifa-alhudaithi.itch.io',
    liveLabel: 'Projects',
  },
]

export const contact = {
  email: 'haifa.alhud@gmail.com',
  linkedin: 'https://www.linkedin.com/in/haifa-alhudaithi',
}