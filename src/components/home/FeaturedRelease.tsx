'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getAssetPath } from '@/utils/assetPath';

export default function FeaturedRelease() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true
  });

  return (
    <section id="latest-release" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={getAssetPath('/images/hero-explore.jpeg')}
          alt="Latest Release Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container-width relative z-10 py-16 sm:py-20 md:py-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl font-poppins font-semibold text-gold mb-3 sm:mb-4">Latest Release</h2>
            <p className="text-lg sm:text-xl text-white/90">Experience the evolution of sound</p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden p-5 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={getAssetPath('/images/woman.JPG')}
                  alt="Latest Release Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-poppins font-semibold text-gold mb-3 sm:mb-4">Woman</h3>
                  <p className="text-gray-300 text-base sm:text-lg">
                    A fusion of hip-hop and R&B that showcases the unique sound and style that defines Lashon's music.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="https://open.spotify.com/track/40ucNDEPQHb5nIcAa0XYGd?si=72ada46e9bda4251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 sm:px-5 py-2.5 sm:py-3"
                  >
                    Listen on Spotify
                  </a>
                  <a
                    href="https://music.apple.com/us/album/woman/1776458294?i=1776458295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-4 sm:px-5 py-2.5 sm:py-3"
                  >
                    Apple Music
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
