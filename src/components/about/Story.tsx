'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/utils/assetPath';

export default function Story() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-emerald-400 mb-4">My Story</h2>
            <p className="text-gray-300">
              Born and raised in the vibrant city of Miami, my musical journey began at an early age.
              The rich cultural tapestry of South Florida, combined with my family's deep appreciation
              for music, shaped my unique sound and artistic vision.
            </p>
            <p className="text-gray-300">
              After honing my craft in Miami's dynamic music scene, I made the bold decision to
              move to New York City. Here, I've had the privilege of working with some of the
              industry's most innovative producers and artists, pushing the boundaries of my
              artistry and developing a style that's truly my own.
            </p>
            <p className="text-gray-300">
              Today, I'm excited to share my music with the world, blending the soulful rhythms
              of my Miami roots with the edgy, contemporary sound I've developed in New York.
              Each song tells a story, and I invite you to be part of this musical journey.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square"
          >
            <img
              src={getAssetPath('/images/gallery-2.jpg')}
              alt="Lashon at the piano"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
