import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center animate-bounce-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-lg opacity-50 dark:opacity-30 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Govinda Kumar Rajbanshi"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl animate-float hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.src = 'https://via.placeholder.com/256?text=GKR'
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white animate-slide-down">
            Govinda Kumar Rajbanshi
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-blue-600 dark:text-blue-400 animate-slide-up">
            Web Developer 
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Passionate about creating beautiful, functional, and user-friendly web applications
            using modern technologies and best practices.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a
              href="https://github.com/rajbansi141"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rajbanshi7610@gmail.com"
              className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


