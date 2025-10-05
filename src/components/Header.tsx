import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
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

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#calculator', label: 'Calculator' },
    { href: '#quotation', label: 'Quotation' },
    { href: '#tracking', label: 'Track Order' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 dark:bg-white/90 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Sun className="h-8 w-8 text-orange-500 animate-pulse group-hover:scale-110 transition-all duration-300" />
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-orange-500 group-hover:text-orange-400 transition-colors">
                SRIYAVEDA
              </h1>
              <p className="text-xs text-teal-400 -mt-1">SOLAR ENERGIES</p>
            </div>
          </div>

          {/* Light/Dark Mode Toggle */}
          <button
            className="mr-4 px-2 py-1 rounded text-xs font-semibold border border-orange-400 bg-white text-black dark:bg-black dark:text-white dark:border-orange-600 transition-colors duration-300"
            onClick={() => setDarkMode((d) => !d)}
            aria-label="Toggle light/dark mode"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-orange-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute inset-0 bg-orange-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 group">
              <span className="flex items-center space-x-2">
                <Zap className="h-4 w-4 group-hover:animate-bounce" />
                <span>Get Quote</span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-orange-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-orange-500/10 rounded-md transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;