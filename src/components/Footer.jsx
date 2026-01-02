import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Govinda Kumar Rajbanshi</h3>
            <p className="text-gray-400">
              Web Developer passionate about creating amazing web experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/rajbansi141"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:rajbanhi7610@gmail.com"
                className="text-2xl hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Govinda Kumar Rajbanshi. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer


