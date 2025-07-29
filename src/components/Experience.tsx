export default function Experience() {
  const experiences = [
    {
      period: "09/2022 - 05/2025",
      company: "CANIFA Corporation",
      position: "Mobile Developer",
      achievements: [
        "Led cross-platform development of React Native mobile applications for e-commerce and internal operations, serving 50K+ active users",
        "Integrated secure payment gateways (VNPay, ShopeePay, ViettelPay) and analytics services (CleverTap) achieving 98%+ payment success rate",
        "Refactored business logic and optimized performance, cutting load time by 25% and achieving 99% crash-free rate through code splitting and efficient state management",
        "Led app deployment process on App Store & Google Play, ensuring timely and successful releases with comprehensive testing protocols",
        "Collaborated closely with backend, UI/UX, and QA teams in Agile sprints to deliver new features on time and provide technical guidance to junior developers",
        "Participated in weekly team meetings to provide progress updates, receive feedback, and contribute to architectural decisions"
      ],
      skills: ["React Native", "Redux", "Firebase", "VNPay/ShopeePay Integration", "CleverTap Analytics", "MapLibre"]
    },
    {
      period: "05/2021 - 09/2022", 
      company: "IZISOLUTION Co., Ltd",
      position: "Mobile Developer",
      achievements: [
        "Built and maintained React Native apps for SME clients with focus on clean UI and smooth UX, serving diverse business requirements",
        "Implemented RESTful API integrations, Redux state management, and basic unit testing to ensure application reliability",
        "Participated actively in daily stand-ups, sprint planning, and code reviews to maintain high code quality and team collaboration"
      ],
      skills: ["React Native", "Redux", "RESTful APIs", "Unit Testing", "Agile Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey building impactful mobile applications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
              
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600">
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.company}
                  </h3>
                  <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">
                    {exp.position}
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                        <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements Summary */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Active Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%+</div>
              <div className="text-lg opacity-90">Payment Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Crash-Free Rate Achieved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
