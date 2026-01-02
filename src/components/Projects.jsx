import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [buttonRef, buttonVisible] = useScrollAnimation()
  const [project1Ref, project1Visible] = useScrollAnimation()
  const [project2Ref, project2Visible] = useScrollAnimation()
  const [project3Ref, project3Visible] = useScrollAnimation()
  const [project4Ref, project4Visible] = useScrollAnimation()
  const [project5Ref, project5Visible] = useScrollAnimation()
  const [project6Ref, project6Visible] = useScrollAnimation()

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application built with MERN stack. Features include user authentication, product management, shopping cart, and payment integration.',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform',
      // category: 'Full Stack',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/600x400?text=Task+Management',
      category: 'Web App',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization, user insights, and engagement metrics.',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/600x400?text=Social+Dashboard',
      // category: 'Dashboard',
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog platform with rich text editing, comment system, user profiles, and admin panel for content management.',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/600x400?text=Blog+Platform',
      // category: 'CMS',
    },
    {
      title: 'Weather App',
      description:
        'A beautiful weather application with real-time forecasts, location-based weather data, and interactive weather maps.',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/600x400?text=Weather+App',
      // category: 'Mobile',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and dark mode.',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'https://via.placeholder.com/600x400?text=Portfolio',
      // category: 'Website',
    },
  ]

  const projectRefs = [
    project1Ref,
    project2Ref,
    project3Ref,
    project4Ref,
    project5Ref,
    project6Ref,
  ]
  const projectVisible = [
    project1Visible,
    project2Visible,
    project3Visible,
    project4Visible,
    project5Visible,
    project6Visible,
  ]

  return (
    <section
      id="projects"
      className="section-container bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-slide-down' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my collection of innovative projects built with modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={projectRefs[index]}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                projectVisible[index] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-lg">
                  {project.category}
                </div> */}

                {/* Hover Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transform hover:scale-110 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transform hover:scale-110 transition-all duration-300"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 group/btn"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 group/btn"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          ref={buttonRef}
          className={`text-center mt-16 ${buttonVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
          >
            <FaGithub className="text-xl" />
            <span>View More Projects</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
