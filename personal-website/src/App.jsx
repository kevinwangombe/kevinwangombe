import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">John Doe</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors duration-200 ${
                      activeSection === item
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl font-bold">
                  JD
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I build exceptional digital experiences that combine beautiful design with robust functionality.
            Let's create something amazing together!
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm a passionate full-stack developer with over 5 years of experience in creating 
                web applications that make a difference. I love turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or enjoying a good cup of coffee while reading about the latest trends in tech.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that are both 
                functional and delightful. Let's connect and build something great together!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '10+', label: 'Technologies' }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">My Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                icon: '🎨',
                skills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Vue.js']
              },
              {
                title: 'Backend Development',
                icon: '⚙️',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
              },
              {
                title: 'Tools & Others',
                icon: '🛠️',
                skills: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD']
              }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured online store with payment integration, inventory management, and analytics dashboard.',
                tags: ['React', 'Node.js', 'Stripe'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Task Management App',
                description: 'Collaborative project management tool with real-time updates, team features, and progress tracking.',
                tags: ['Next.js', 'Socket.io', 'MongoDB'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'AI Content Generator',
                description: 'An intelligent content creation platform leveraging machine learning for automated copywriting.',
                tags: ['Python', 'TensorFlow', 'React'],
                color: 'from-green-500 to-teal-500'
              }
            ].map((project, index) => (
              <div key={index} className="group bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <div className="text-white text-6xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
                    🚀
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">Or connect with me on social media</p>
            <div className="flex justify-center gap-6">
              {[
                { name: 'GitHub', icon: '🐙' },
                { name: 'LinkedIn', icon: '💼' },
                { name: 'Twitter', icon: '🐦' },
                { name: 'Email', icon: '📧' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-all duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 dark:bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} John Doe. All rights reserved. Built with React & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
