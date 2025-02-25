'use client';

import { useRef, useEffect } from "react";
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented
        });
      }
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black"
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
        className="container-width relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[3.5rem] xs:text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] xl:text-[13rem] font-amsterdam text-white mb-6 leading-[0.85] tracking-normal">
          LASHON
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-poppins max-w-2xl mx-auto">
          Miami-Born • New York-Trained • Ready to Rise
        </p>
        <a
          href="#latest-release"
          className="btn-primary text-base sm:text-lg px-8 py-4"
        >
          Explore My Music
        </a>
      </motion.div>
    </section>
  );
}
