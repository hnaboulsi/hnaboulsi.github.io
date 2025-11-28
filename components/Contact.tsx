import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-black opacity-90"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-6">Get In Touch</h2>
          <div className="h-1 w-20 bg-electric mx-auto rounded-full mb-8"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <a href="mailto:naboulsi@berkeley.edu" className="flex items-center gap-4 text-slate-300 hover:text-electric transition-colors group px-6 py-4 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 w-full md:w-auto justify-center md:justify-start">
            <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-electric/20 transition-colors">
              <Mail className="group-hover:text-electric" size={24} />
            </div>
            <span className="text-lg font-medium">naboulsi@berkeley.edu</span>
          </a>
          
          <a href="https://linkedin.com/in/hnaboulsi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-electric transition-colors group px-6 py-4 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 w-full md:w-auto justify-center md:justify-start">
            <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-electric/20 transition-colors">
              <Linkedin className="group-hover:text-electric" size={24} />
            </div>
            <span className="text-lg font-medium">LinkedIn</span>
          </a>

          <a href="https://github.com/hnaboulsi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-electric transition-colors group px-6 py-4 bg-white/5 rounded-xl hover:bg-white/10 border border-white/10 w-full md:w-auto justify-center md:justify-start">
            <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-electric/20 transition-colors">
              <Github className="group-hover:text-electric" size={24} />
            </div>
            <span className="text-lg font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;