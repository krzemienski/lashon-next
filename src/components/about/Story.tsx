'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getAssetPath } from '@/utils/assetPath';

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true
  });

  return (
    <section ref={ref} className="section-padding bg-black min-h-screen flex items-center">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Story Text */}
          <div className="space-y-8">
            <h1 className="text-5xl font-poppins font-semibold text-gold mb-8">My Story</h1>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                Born and raised in the vibrant city of Miami, my musical journey began at an early age.
                Although I didn't actually begin making music due to being an athlete, the rich cultural
                tapestry of South Florida, combined with my family's deep appreciation for music,
                shaped my unique sound and artistic vision.
              </p>
              <p className="text-gray-300 text-lg">
                After honing in my craft in Miami as a well known athlete, I made the bold decision
                to completely shift gears and move to NY to pursue my dreams as an artist. Here,
                I've had the privilege of working with some of the industry's most innovative
                producers and artists, pushing the boundaries of my artistry and developing a
                style that's truly my own.
              </p>
              <p className="text-gray-300 text-lg">
                Today, I'm excited to share my music with the world, blending the soulful rhythms
                of my Miami roots with the edgy, contemporary sound I've developed in New York.
                Each song tells a story, and I invite you to be part of this musical journey.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
            <img
              src={getAssetPath('/images/hero-about.jpeg')}
              alt="Lashon's Journey"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
