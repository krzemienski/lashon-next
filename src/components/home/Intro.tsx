'use client';

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.5,
};

export default function Intro() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, observerOptions);

  useEffect(() => {
    // Force video load and play on mount
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, we'll let the muted attribute handle it
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
          poster="/images/hero-bg.jpg"
          className="object-cover w-full h-full"
          preload="auto"
        >
          <source src="/videos/hero-background-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container-width relative z-10 text-center">
        <h1 className="text-6xl sm:text-8xl font-bold text-white mb-6">
          LASHON
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8">
          Miami-Born • New York-Trained • Ready to Rise
        </p>
        <a
          href="#latest-release"
          className="btn-primary"
        >
          Explore My Music
        </a>
      </div>
    </section>
  );
}
