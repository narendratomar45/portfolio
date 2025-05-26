
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 8954401988",
      href: "tel:+918954401988"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "narendratomar4599@gmail.com",
      href: "mailto:narendratomar4599@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Noida, Uttar Pradesh",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-all duration-300 group"
                >
                  <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Connect with Me</h4>
              <div className="flex space-x-4">
                <a target='_blank'
                  href="https://www.linkedin.com/in/narendra-tomar-538087187"
                  className="p-3 bg-slate-700/50 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-slate-700/70 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a target=''
                  href="https://github.com/narendratomar45"
                  className="p-3 bg-slate-700/50 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-slate-700/70 transition-all duration-300 hover:scale-110"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-700/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-600/50 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-400">
            © 2024 Narendra Tomar. Crafted with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
