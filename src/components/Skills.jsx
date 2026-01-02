import {
  FaReact,
  FaNode,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBootstrap,
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux } from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [skillsRef, skillsVisible] = useScrollAnimation()

  // Combine all skills into a single array
  const allSkills = [
    { name: 'React.js', icon: FaReact, color: 'text-blue-500' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-600' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-600' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'RESTful APIs', icon: FaDatabase, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
  ]

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`${titleVisible ? 'animate-slide-down' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technologies</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg mb-6">
            Technologies I work with
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full"></div>
        </div>
        
        <div 
          ref={skillsRef}
          className={`${skillsVisible ? 'animate-scale-in' : 'opacity-0'}`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {allSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-all duration-500">
                  <skill.icon className={`text-5xl ${skill.color} transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`} />
                </div>
                
                {/* Skill Name */}
                <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </span>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


