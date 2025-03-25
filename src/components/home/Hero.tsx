'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    image: '/images/hero-bg.jpg', // DSC00437-Edit.png - emerald green gown
    alt: 'Lashon in emerald green gown',
  },
  {
    image: '/images/gallery-1.jpg', // KIR_0118.jpg - black dress
    alt: 'Lashon in black dress',
  },
  {
    image: '/images/gallery-2.jpg', // KIR_0123.jpg - white piano
    alt: 'Lashon at the piano',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            priority
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[2rem] xs:text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-amsterdam text-white mb-4 sm:mb-6 leading-[1.1] tracking-normal"
          >
            Lashon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 tracking-wide"
          >
            Miami-Born • New York-Trained • Ready to Rise
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/music"
              className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors duration-200"
            >
              Explore My Music
            </a>
            <a
              href="https://lashonsstore.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-black px-8 py-3 rounded-md text-lg font-medium hover:bg-burnt-orange hover:text-white transition-colors duration-200"
            >
              Shop
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
