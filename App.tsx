import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import { Mail } from 'lucide-react';

function App() {
  // Initialize dark mode based on system preference or default to dark
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true; 
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen font-sans selection:bg-electric selection:text-white flex flex-col justify-between">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex-grow">
        <Hero />
        <About />
      </main>
      
      <Contact />

      {/* Floating Action Button for Mobile */}
      <a 
        href="#contact" 
        className="fixed bottom-6 right-6 p-4 bg-electric text-white rounded-full shadow-xl z-50 md:hidden hover:scale-110 transition-transform"
        aria-label="Contact Me"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}

export default App;