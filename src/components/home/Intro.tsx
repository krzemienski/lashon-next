'use client';

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { getAssetPath } from '@/utils/assetPath';
import Link from 'next/link';

export default function Intro() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true
  });
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);
    
    // Update screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Video handling
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented - silent fallback
        });
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black py-16 sm:py-20"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={getAssetPath('/images/hero-bg.jpg')}
          className="object-cover w-full h-full"
          preload="auto"
        >
          <source src={getAssetPath('/videos/hero-background-2.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div 
        className="container-width relative z-10 text-center px-4 intro-text-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        {screenWidth < 375 ? (
          <img 
            src={getAssetPath('/images/lashon-text-logo.png')} 
            alt="LASHON" 
            className="w-full max-w-[140px] mx-auto mb-4 sm:mb-6" 
          />
        ) : (
          <h1 className="text-[1.75rem] xs:text-[2.25rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-amsterdam text-white mb-4 sm:mb-6 leading-[0.9] tracking-normal intro-title">
            LASHON
          </h1>
        )}
        
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 font-poppins max-w-2xl mx-auto intro-tagline">
          {screenWidth < 375 ? 
            "Miami-Born • NY-Trained • Rising" : 
            "Miami-Born • New York-Trained • Ready to Rise"
          }
        </p>
        
        <a
          href="#latest-release"
          className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
        >
          Explore My Music
        </a>
      </motion.div>
    </section>
  );
}
