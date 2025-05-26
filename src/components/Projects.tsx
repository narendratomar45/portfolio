
import React from 'react';
import { ExternalLink, Github, Shield, Users, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weigh Bridge Management System",
      description: "Multi-branch system for weighbridge management with role-based access control. Branch managers can update income/expenses while admin has full access to all branches.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Redux Toolkit"],
      features: [
        "Role-based access control",
        "Real-time financial dashboards",
        "MongoDB aggregation pipelines",
        "JWT-based secure authentication"
      ],
      icon: <Users className="text-purple-400" size={32} />
    },
    {
      title: "Malkhana Management System",
      description: "Role-based application for managing case-wise evidence with comprehensive CRUD operations and secure JWT-based authentication system.",
      technologies: ["React.js", "Express.js", "MongoDB", "JWT", "MVC Architecture"],
      features: [
        "Case registration and tracking",
        "Evidence management system",
        "Advanced filtering capabilities",
        "Real-time dashboard analytics"
      ],
      icon: <Shield className="text-purple-400" size={32} />
    },
    {
      title: "e-Bazar E-commerce Platform",
      description: "Responsive online shopping platform with modern UI/UX, featuring product listings, advanced filters, and seamless shopping cart functionality.",
      technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
      features: [
        "Product catalog with filters",
        "Shopping cart functionality",
        "Responsive design",
        "Product carousel display"
      ],
      icon: <ShoppingCart className="text-purple-400" size={32} />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of production-ready applications built with modern technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-6">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </button>
                <button className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300">
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
