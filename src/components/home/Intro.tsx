'use client';

import { useRef } from "react";
import { useInView } from "framer-motion";

const observerOptions = {
  rootMargin: "0px",
  threshold: 0.5,
};

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, observerOptions);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.jpg"
          className="object-cover w-full h-full"
          preload="metadata"
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
