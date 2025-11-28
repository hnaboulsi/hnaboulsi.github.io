import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-slate-200/20 text-slate-500 dark:text-slate-400 hover:bg-white/20 dark:hover:bg-slate-800 transition-colors shadow-sm"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default Navbar;