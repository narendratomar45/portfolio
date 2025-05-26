
import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Frontend Excellence",
      description: "Expert in React.js, Redux Toolkit, and modern CSS frameworks"
    },
    {
      icon: <Database size={24} />,
      title: "Backend Mastery",
      description: "Proficient in Node.js, Express.js, and MongoDB integration"
    },
    {
      icon: <Globe size={24} />,
      title: "Full Stack Solutions",
      description: "End-to-end development with seamless API integration"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Focus",
      description: "Optimized applications with robust security implementations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer based in Noida, UP, with a strong foundation in the MERN stack. 
              My journey in web development has been driven by a love for creating efficient, scalable, and user-friendly applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With 1.5+ years of professional experience at Namrata Universal, I've honed my skills in building 
              production-ready applications that solve real-world problems. My expertise spans from crafting 
              intuitive user interfaces to designing robust backend architectures.
            </p>
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
              <p className="text-gray-300">
                <strong>Bachelor of Engineering</strong><br />
                Aligarh Muslim University (2019-2023)<br />
                CGPA: 7.93
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-400 mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
