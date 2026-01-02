import { FaCode, FaLaptopCode, FaRocket, FaUser } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()
  const [card1Ref, card1Visible] = useScrollAnimation()
  const [card2Ref, card2Visible] = useScrollAnimation()
  const [card3Ref, card3Visible] = useScrollAnimation()

  return (
    <section id="about" className="section-container bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? 'animate-slide-down' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Get to know more about my journey and expertise
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content Section */}
          <div ref={contentRef} className={`${contentVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Govinda Kumar Rajbanshi
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hello! I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Web Developer</span> with a strong foundation in building 
                    scalable and efficient web applications.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I specialize in creating dynamic, responsive, and user-friendly web applications using 
                    modern technologies. My expertise includes <span className="font-semibold text-purple-600 dark:text-purple-400">React.js</span>, <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">Express.js</span>, <span className="font-semibold text-green-500 dark:text-green-400">MongoDB</span>, and 
                    various frontend and backend frameworks.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I'm always eager to learn new technologies and take on challenging projects that push 
                    the boundaries of what's possible on the web.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            <div 
              ref={card1Ref} 
              className={`group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-blue-200 dark:border-blue-800 ${card1Visible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl mb-4 w-fit shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <FaCode className="text-3xl text-blue-600 dark:text-blue-400 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Clean Code</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Writing maintainable and scalable code
                </p>
              </div>
            </div>
            
            <div 
              ref={card2Ref} 
              className={`group relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-purple-200 dark:border-purple-800 ${card2Visible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl mb-4 w-fit shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <FaLaptopCode className="text-3xl text-purple-600 dark:text-purple-400 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Full Stack</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  End-to-end development expertise
                </p>
              </div>
            </div>
            
            <div 
              ref={card3Ref} 
              className={`group relative bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-pink-200 dark:border-pink-800 ${card3Visible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-bl-full opacity-20"></div>
              <div className="relative z-10">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl mb-4 w-fit shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <FaRocket className="text-3xl text-pink-600 dark:text-pink-400 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Performance</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Optimized and fast applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


