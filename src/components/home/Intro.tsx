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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
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
        className="container-width relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[16rem] font-amsterdam text-white mb-6 leading-[0.8] tracking-normal">
          LASHON
        </h1>
        <p className="text-lg xs:text-xl sm:text-2xl text-gray-200 mb-8">
          Miami-Born • New York-Trained • Ready to Rise
        </p>
        <a
          href="#latest-release"
          className="btn-primary text-base sm:text-lg"
        >
          Explore My Music
        </a>
      </motion.div>
    </section>
  );
}
