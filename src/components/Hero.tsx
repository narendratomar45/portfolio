
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              NARENDRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TOMAR</span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-2">Full Stack Developer</div>
            <div className="text-lg text-purple-300">MERN Stack Specialist</div>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Results-driven developer with 1.5+ years of experience crafting scalable web applications
            using React.js, Node.js, and MongoDB. Passionate about building secure, high-performance solutions
            with intuitive user experiences.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="tel:+918954401988"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              <span>+91 8954401988</span>
            </a>
            <a
              href="mailto:narendratomar4599@gmail.com"
              className="flex items-center space-x-2 border border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
