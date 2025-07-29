export default function Projects() {
  const projects = [
    {
      title: "Secondhands App - Mobile Marketplace",
      period: "05/2027 - 07/2025",
      customer: "Freelance Client",
      description: "Cross-platform mobile app for secondhand marketplace with user authentication, product management, real-time chat, and multi-role system (buyer/seller/admin).",
      teamSize: 1,
      position: "Mobile Developer",
      responsibilities: [
        "Developed React Native mobile app for iOS & Android",
        "Implemented state management with Redux Toolkit",
        "Integrated GraphQL APIs using Apollo Client", 
        "Built responsive UI with custom components",
        "Added multi-language support (I18n)",
        "Set up automated testing and CI/CD pipeline",
        "Implemented role-based navigation system"
      ],
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Apollo Client", "GraphQL", "Jest (Testing)", "ESLint", "GitHub Actions (CI/CD)", "Fastlane"],
      achievements: [
        "Successfully delivered full-featured marketplace app",
        "Implemented comprehensive testing coverage",
        "Set up automated deployment pipeline"
      ]
    },
    {
      title: "Homestay Booking Platform",
      period: "07/2027 - 07/2025", 
      customer: "Freelance Client",
      description: "A modern web application for homestay booking and management in Moc Chau, Vietnam. Features complete booking system, admin dashboard, and content management for tourism business operations.",
      teamSize: 1,
      position: "Mobile Developer",
      responsibilities: [
        "Built responsive UI with React/Next.js and modern animations",
        "Implemented Firebase services for data management and hosting",
        "Created real-time room booking with pricing and availability checking",
        "Developed management panel for rooms, bookings, and analytics",
        "Structured Firestore database for efficient data operations",
        "Set up automated deployment pipeline with Firebase hosting"
      ],
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Firebase"],
      achievements: [
        "Delivered modern booking platform with real-time features",
        "Implemented efficient data management system",
        "Created user-friendly admin dashboard"
      ]
    },
    {
      title: "E-commerce Mobile App",
      period: "09/2022 - 05/2025",
      customer: "CANIFA & ONOFF",
      description: "React Native e-commerce mobile application for Canifa fashion brand with 500K+ downloads",
      teamSize: "7 (2 Mobile Developers, 2 Backend, 1 UI/UX, 1 QA, 1 PM)",
      position: "Mobile Developer",
      responsibilities: [
        "Integrated 3 payment gateways (VNPay, ShopeePay, ViettelPay) with comprehensive error handling and retry mechanisms",
        "Built Video Commerce feature (C-Live) with real-time streaming capabilities, increasing user engagement by 40%",
        "Implemented 4-tier loyalty program system with membership management and point redemption functionality",
        "Deployed comprehensive analytics tracking using CleverTap & Firebase Analytics for user behavior insights",
        "Optimized performance and maintained 99% crash-free rate through code optimization and memory management"
      ],
      technologies: ["React Native", "Redux", "Firebase", "VNPay/ShopeePay Integration", "CleverTap Analytics", "MapLibre"],
      achievements: [
        "Achieved 98%+ payment success rate across all integrated gateways",
        "Delivered 85% code reusability across iOS and Android platforms", 
        "Increased user engagement by 40% through innovative video commerce features",
        "Maintained 99% crash-free rate through rigorous testing and optimization"
      ]
    },
    {
      title: "Employee Management Mobile App",
      period: "09/2022 - 05/2025",
      customer: "CANIFA & ONOFF", 
      description: "Internal management application for Canifa retail chain, integrating HRM, sales reporting, product management, and internal communication features for 500+ employees.",
      teamSize: "7 (2 Mobile Developers, 2 Backend, 1 UI/UX, 1 QA, 1 PM)",
      position: "Mobile Developer",
      responsibilities: [
        "Built HRM modules: attendance tracking, leave requests, employee profiles, contract management",
        "Developed real-time sales tracking with data visualization and filtering capabilities",
        "Integrated Firebase services for push notifications, analytics, and real-time data synchronization",
        "Implemented barcode and lifecycle management with barcode/QR scanning functionality",
        "Optimized app performance and implemented biometric authentication for security",
        "Maintained code quality and resolved compatibility issues using React Native patches"
      ],
      technologies: ["React Native", "Redux", "Firebase", "React Navigation", "Expo", "REST APIs", "Push Notifications", "Biometric Auth", "Real-time Database"],
      achievements: [
        "Streamlined internal operations, reduced manual processes by 60%, and improved operational efficiency through mobile-first approach",
        "Successfully deployed to 500+ employees across retail locations",
        "Implemented secure authentication and real-time data synchronization"
      ]
    },
    {
      title: "Warehouse Management App", 
      period: "05/2021 - 09/2022",
      customer: "KANGAROO",
      description: "Built an offline-capable warehouse app featuring barcode scanning, inventory tracking, and shipment monitoring, improving operational efficiency and accuracy",
      teamSize: "4 (1 Mobile Developers, 1 Backend, 1 QA, 1 PM)",
      position: "Mobile Developer", 
      responsibilities: [
        "Designed and implemented offline-first storage and synchronization using Realm",
        "Developed barcode scanning and inventory management features",
        "Ensured smooth UX by optimizing app responsiveness and error handling",
        "Collaborated with backend developers to integrate APIs and data synchronization logic",
        "Conducted unit testing and participated in user acceptance testing"
      ],
      technologies: ["React Native", "Redux", "Firebase", "Realm"],
      achievements: [
        "Reduced inventory tracking time by 70% through barcode scanning automation",
        "Achieved 99.5% data accuracy with offline-first synchronization system", 
        "Improved warehouse operational efficiency by 45% through mobile-first approach"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world applications that showcase my expertise in mobile development
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="lg:flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-semibold">{project.period}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{project.customer}</span>
                      <span className="hidden sm:block">•</span>
                      <span>Team size: {project.teamSize}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
                      {project.position}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Responsibilities
                    </h4>
                    <div className="space-y-2">
                      {project.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {project.achievements && (
                      <>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Key Achievements
                        </h4>
                        <div className="space-y-2 mb-6">
                          {project.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start">
                              <svg className="w-4 h-4 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
