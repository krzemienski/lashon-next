'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/utils/assetPath';

export default function FeaturedRelease() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="latest-release" className="section-padding bg-gradient-to-b from-black to-emerald-950">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Album Art */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            <img
              src={getAssetPath('/images/moolah-cover.jpg')}
              alt="Moolah Album Cover"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Release Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-emerald-400 mb-4">Latest Release</h2>
            <h3 className="text-3xl font-bold text-white mb-6">Moolah</h3>
            <p className="text-gray-300 mb-8">
              Experience the fusion of hip-hop beats and soulful melodies in Lashon's
              latest single. "Moolah" showcases her unique style and powerful vocals,
              delivering a fresh sound that's both contemporary and timeless.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://open.spotify.com/track/moolah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Listen on Spotify
              </a>
              <a
                href="https://music.apple.com/track/moolah"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Apple Music
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
