
import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-700/50 rounded-xl p-8 hover:bg-slate-700/70 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Building size={16} />
                    <span>Namrata Universal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Noida</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-purple-400 mt-4 md:mt-0">
                <Calendar size={16} />
                <span>Oct 2023 – Present</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Leading full-stack development initiatives using the MERN stack, focusing on performance optimization 
                and scalable architecture design.
              </p>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built and maintained full-stack applications using the MERN stack with a focus on performance optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed interactive UI components using React.js and managed global state using Redux Toolkit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrated RESTful APIs using Express.js and MongoDB for backend logic and seamless data flow</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implemented Firebase Authentication for secure login systems and real-time data updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaborated with UI/UX designers to implement mobile-first responsive designs using Tailwind CSS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
