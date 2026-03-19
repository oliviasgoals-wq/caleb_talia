'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface MenuItem {
  label: string;
  href: string;
}

interface HamburgerMenuProps {
  menuItems?: MenuItem[];
  logoText?: string;
  logoImage?: string;
  theme?: 'light' | 'dark'; // New theme prop
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ 
  menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/story' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Dress Code', href: '/dress' },
    { label: 'FAQ', href: '/q+a' },
  ],
  logoText = 'Caleb & Talia',
  logoImage,
  theme = 'light' // Default to light theme
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname(); // Get current path

  // Theme-based color configurations
  const themeColors = {
    light: {
      text: 'text-[#1a3b2e]',
      textHover: 'hover:text-[#2c5a48]',
      textMuted: 'text-[#1a3b2e]/60',
      bg: 'bg-white/50',
      bgHeader: scrolled ? 'bg-white/30' : 'bg-transparent',
      underline: 'bg-[#EFBF04]',
      hamburger: 'bg-[#1a3b2e]',
      dots: 'bg-[#1a3b2e]/30',
    },
    dark: {
      text: 'text-[#e8f0e8]',
      textHover: 'hover:text-[#ffffff]',
      textMuted: 'text-[#EFBF04]/60',
      bg: 'bg-[#2c5a48]/50',
      bgHeader: scrolled ? 'bg-[#2c5a48]/30' : 'bg-transparent',
      underline: 'bg-[#EFBF04]',
      hamburger: 'bg-[#EFBF04]',
      dots: 'bg-[#EFBF04]/30',
    }
  };

  const colors = themeColors[theme];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  // Check if a link is active
  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? colors.bgHeader + ' backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-15">

            {/* Desktop Navigation - Hidden on Mobile */}
            <nav className="hidden lg:flex items-center space-x-8 mx-auto">
              {menuItems.map((item, index) => {
                const isActive = isActiveLink(item.href);
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative ${colors.text} ${colors.textHover} transition-colors duration-300 text-sm uppercase text-ballet tracking-wider font-light py-2 group ${
                      isActive ? 'font-medium' : ''
                    }`}
                    style={{
                      animation: scrolled ? 'none' : `fadeInDown 0.5s ease-out ${index * 0.1}s both`,
                      fontSize: isActive ? '1.1rem' : '0.875rem', // Larger text for active link
                    }}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${colors.underline} group-hover:w-full transition-all duration-300 ${
                      isActive ? 'w-full' : ''
                    }`} />
                  </Link>
                );
              })}
            </nav>

            {/* Logo/Text - Can be added if needed */}
            <div className="lg:hidden">
              {logoImage ? (
                <Image src={logoImage} alt={logoText} width={40} height={40} />
              ) : (
                <span className={`${colors.text} font-light text-lg`}>{logoText}</span>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className="relative z-50 flex flex-col justify-center items-center w-12 h-12 focus:outline-none group lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 ${colors.hamburger} transition-all duration-300 ease-in-out group-hover:w-8 ${
                  isOpen ? 'rotate-45 translate-y-1.5 w-8' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 ${colors.hamburger} mt-1.5 transition-all duration-300 ease-in-out group-hover:w-8 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 ${colors.hamburger} mt-1.5 transition-all duration-300 ease-in-out group-hover:w-8 ${
                  isOpen ? '-rotate-45 -translate-y-1.5 w-8' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md ${colors.bg} backdrop-blur-md shadow-2xl transition-all duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-8">
          </div>
          
          {/* Mobile nav */}
          <nav className="px-8 py-4">
            <ul className="space-y-6">
              {menuItems.map((item, index) => {
                const isActive = isActiveLink(item.href);
                
                return (
                  <li
                    key={item.href}
                    className="transform transition-all duration-500 ease-out"
                    style={{
                      transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen 
                        ? 'translateX(0)' 
                        : 'translateX(20px)',
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`group relative inline-block ${colors.text} ${colors.textHover} transition-colors duration-300 ${
                        isActive ? 'text-3xl font-medium' : 'text-2xl font-light'
                      }`}
                      style={{
                        fontSize: isActive ? '1.875rem' : '1.5rem', // Larger text for active link in mobile
                      }}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${colors.underline} group-hover:w-full transition-all duration-300 ${
                        isActive ? 'w-full' : ''
                      }`} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <p className={`text-sm ${colors.textMuted} font-light italic`}>
              Together with joy
            </p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className={`w-2 h-2 ${colors.dots} rounded-full`} />
              <span className={`w-2 h-2 ${colors.dots} rounded-full`} />
              <span className={`w-2 h-2 ${colors.dots} rounded-full`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;