// app/components/Navbar.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginType, setLoginType] = useState('patient'); // 'patient' or 'doctor'
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`${scrolled ? 'bg-primary/95 dark:bg-neutral-800/95 backdrop-blur-md shadow-lg py-3' : 'bg-primary dark:bg-neutral-800 py-4'} 
                     text-white px-6 sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
          onMouseEnter={() => setHoveredItem('logo')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <span className="text-primary text-xl font-bold">F</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${hoveredItem === 'logo' ? 'text-primaryLight' : 'text-white'} transition-colors duration-300`}>
            FlowAid
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className="relative group py-2"
            onMouseEnter={() => setHoveredItem('home')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={`${hoveredItem === 'home' ? 'text-primaryLight' : 'text-white'} transition-colors duration-300`}>Home</span>
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primaryLight transition-all duration-300 ${hoveredItem === 'home' ? 'w-full' : 'w-0'}`}></span>
          </Link>
          
          <Link 
            href="#about"
            className="relative group py-2"
            onMouseEnter={() => setHoveredItem('about')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={`${hoveredItem === 'about' ? 'text-primaryLight' : 'text-white'} transition-colors duration-300`}>About</span>
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primaryLight transition-all duration-300 ${hoveredItem === 'about' ? 'w-full' : 'w-0'}`}></span>
          </Link>
          
          <Link 
            href="#contact" 
            className="relative group py-2"
            onMouseEnter={() => setHoveredItem('contact')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className={`${hoveredItem === 'contact' ? 'text-primaryLight' : 'text-white'} transition-colors duration-300`}>Contact</span>
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primaryLight transition-all duration-300 ${hoveredItem === 'contact' ? 'w-full' : 'w-0'}`}></span>
          </Link>
          
          {/* Login Toggle Button */}
          <div className="relative group" onMouseEnter={() => setHoveredItem('login')} onMouseLeave={() => setHoveredItem(null)}>
            <div className="flex items-center gap-2 bg-primaryLight/20 rounded-full p-1 cursor-pointer shadow-custom transition-all duration-300 hover:shadow-custom-lg">
              <button 
                onClick={() => setLoginType('patient')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${loginType === 'patient' ? 'bg-primaryLight text-white shadow-button' : 'hover:text-primaryLight'}`}
              >
                Patient
              </button>
              <button 
                onClick={() => setLoginType('doctor')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${loginType === 'doctor' ? 'bg-primaryLight text-white shadow-button' : 'hover:text-primaryLight'}`}
              >
                Doctor
              </button>
            </div>
            
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-custom-lg overflow-hidden z-50 transform opacity-0 scale-95 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100">
              <div className="py-2">
                <Link 
                  href={`/Login/${loginType}`} 
                  className="block px-4 py-3 text-primary hover:bg-primaryLight hover:text-white transition-colors duration-300"
                >
                  {loginType === 'patient' ? 'Patient Login' : 'Doctor Login'}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'}`}></span>
            <span className={`absolute h-0.5 w-full bg-white top-3 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-primary/95 backdrop-blur-sm mt-4 py-4 px-6 space-y-4 absolute left-0 right-0 transform transition-all duration-300 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <Link href="/" className="block hover:text-primaryLight transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
        <Link href="#about" className="block hover:text-primaryLight transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link href="#contact" className="block hover:text-primaryLight transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
        
        <div className="pt-4 border-t border-white/10">
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => setLoginType('patient')}
              className={`px-4 py-3 rounded-xl text-left transition-all ${loginType === 'patient' ? 'bg-gradient-to-r from-primaryLight to-primary text-white shadow-button' : 'text-white/80 hover:text-primaryLight'}`}
            >
              Patient Login
            </button>
            <button 
              onClick={() => setLoginType('doctor')}
              className={`px-4 py-3 rounded-xl text-left transition-all ${loginType === 'doctor' ? 'bg-gradient-to-r from-primaryLight to-primary text-white shadow-button' : 'text-white/80 hover:text-primaryLight'}`}
            >
              Doctor Login
            </button>
            <Link 
              href={`/Login/${loginType}`}
              className="mt-2 block px-4 py-3 bg-primaryLight hover:bg-gradient-to-r hover:from-primaryLight hover:to-primary text-white rounded-xl text-center shadow-button transform hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Login Now
            </Link>
            
            {/* Theme Toggle for mobile */}
            <div className="flex justify-center mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}