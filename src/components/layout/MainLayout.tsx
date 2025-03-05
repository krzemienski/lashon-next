'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import useAnalytics from '@/hooks/useAnalytics';
import { trackEvent } from '@/utils/analytics';

// Analytics component wrapped in Suspense
function Analytics() {
  useAnalytics();
  return null;
}

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Track menu toggle event
    trackEvent('menu_toggle', { state: !isMenuOpen ? 'open' : 'closed' });
  };

  // Track navigation link clicks
  const handleNavLinkClick = (linkName: string) => {
    trackEvent('navigation_click', { link: linkName });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="container-width py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-amsterdam text-gold hover:text-burnt-orange transition-colors leading-[1.1]"
              onClick={() => handleNavLinkClick('logo')}
            >
              Lashon
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-sm lg:text-base">
              <Link 
                href="/" 
                className="text-white hover:text-gold transition-colors"
                onClick={() => handleNavLinkClick('home')}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-gold transition-colors"
                onClick={() => handleNavLinkClick('about')}
              >
                About
              </Link>
              <Link 
                href="/music" 
                className="text-white hover:text-gold transition-colors"
                onClick={() => handleNavLinkClick('music')}
              >
                Music
              </Link>
              <Link 
                href="/gallery" 
                className="text-white hover:text-gold transition-colors"
                onClick={() => handleNavLinkClick('gallery')}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-gold transition-colors"
                onClick={() => handleNavLinkClick('contact')}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-1 sm:p-2"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95"
            >
              <div className="container-width py-3 md:py-4 flex flex-col space-y-3 md:space-y-4">
                <Link
                  href="/"
                  className="text-white hover:text-gold transition-colors"
                  onClick={() => handleNavLinkClick('home_mobile')}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-gold transition-colors"
                  onClick={() => handleNavLinkClick('about_mobile')}
                >
                  About
                </Link>
                <Link
                  href="/music"
                  className="text-white hover:text-gold transition-colors"
                  onClick={() => handleNavLinkClick('music_mobile')}
                >
                  Music
                </Link>
                <Link
                  href="/gallery"
                  className="text-white hover:text-gold transition-colors"
                  onClick={() => handleNavLinkClick('gallery_mobile')}
                >
                  Gallery
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-gold transition-colors"
                  onClick={() => handleNavLinkClick('contact_mobile')}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen flex flex-col bg-black">
        <Suspense fallback={<div>Loading...</div>}>
          <Analytics />
        </Suspense>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
