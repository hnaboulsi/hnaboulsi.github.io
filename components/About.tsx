import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-navy transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
              About <span className="text-electric">Me</span>
            </h2>
            <div className="h-1 w-20 bg-berkeley mb-8"></div>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I am currently a junior at <span className="font-semibold text-berkeley">UC Berkeley</span> studying Electrical Engineering & Computer Sciences (EECS). I am a hands-on engineer who is passionate about hardware, automation, and building systems that work in the real world!
              </p>
              <p>
                I have experience across research and government sectors, from designing high-performance circuits in France to engineering energy storage systems in Tennessee. My goal is to bridge the gap between simulation and reality, using tools like Python and LTspice to create hardware that is efficient, scalable, and field-ready.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-berkeley/10 rounded-lg text-berkeley">
                <GraduationCap size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">University of California, Berkeley</h3>
                <p className="text-slate-500 dark:text-slate-400">B.S. Electrical Engineering & Computer Sciences</p>
                <p className="text-sm text-electric mt-1 font-medium">Expected Graduation: May 2027</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin size={18} className="text-slate-400" />
                <span>Berkeley, CA</span>
              </div>
              
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {['Power Electronics', 'Microfabrication', 'Embedded Systems', 'IoT'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-sm border border-slate-200 dark:border-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;