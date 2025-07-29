export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript (ES6+)", "TypeScript"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React Native", "Redux", "Expo", "Firebase", "CleverTap Analytics"],
      icon: "⚛️"
    },
    {
      title: "State Management",
      skills: ["Redux", "Redux Thunk", "Redux Persist", "Context API"],
      icon: "🔄"
    },
    {
      title: "Backend Integration",
      skills: ["RESTful APIs", "GraphQL", "Axios"],
      icon: "🔗"
    },
    {
      title: "Testing & Quality",
      skills: ["Jest", "React Test Renderer", "Unit Testing"],
      icon: "🧪"
    },
    {
      title: "Development Tools",
      skills: ["Xcode", "Android Studio", "VS Code", "Git", "Postman", "Figma"],
      icon: "🛠️"
    },
    {
      title: "Cloud & Analytics",
      skills: ["Firebase (Auth, Analytics, Messaging)", "Google Analytics", "AppsFlyer"],
      icon: "☁️"
    },
    {
      title: "Design System",
      skills: ["Component Libraries", "Design Tokens", "Style Guides", "Atomic Design"],
      icon: "🎨"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-4xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-3 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Design Principles */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Design Principles</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2">OOP</h4>
              <p className="text-sm opacity-90">Object-Oriented Programming</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏗️</div>
              <h4 className="font-semibold mb-2">SOLID</h4>
              <p className="text-sm opacity-90">Design Principles</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-semibold mb-2">Design Patterns</h4>
              <p className="text-sm opacity-90">Hooks, Render Props, HOCs</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚛️</div>
              <h4 className="font-semibold mb-2">Atomic Design</h4>
              <p className="text-sm opacity-90">Component Architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
