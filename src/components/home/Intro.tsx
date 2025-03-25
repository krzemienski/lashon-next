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
      className="relative min-h-[100dvh] flex items-center justify-center bg-black"
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
        className="container-width relative z-10 text-center px-4 py-16 md:py-0 hero-text-container flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6 md:mb-8 lg:mb-10">
          {screenWidth < 375 ? (
            <h1 className="text-[2.5rem] font-amsterdam text-white leading-[1] tracking-normal pl-4">
              Lashon
            </h1>
          ) : (
            <h1 className="text-[3.5rem] xs:text-[4.2rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-amsterdam text-white leading-[1] tracking-normal pl-5">
              Lashon
            </h1>
          )}
        </div>

        <p className="text-base xs:text-lg sm:text-xl md:text-xl text-gray-200 mb-8 md:mb-10 font-poppins max-w-2xl mx-auto tagline-text tracking-wide">
          {screenWidth < 375 ?
            "Miami-Born • NY-Trained • Rising" :
            "Miami-Born • New York-Trained • Ready to Rise"
          }
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/music"
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block"
          >
            Explore My Music
          </a>
          <a
            href="https://lashonsstore.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-block bg-gold text-black hover:bg-burnt-orange hover:text-white transition-colors duration-200"
          >
            Shop
          </a>
        </div>
      </motion.div>
    </section>
  );
}
