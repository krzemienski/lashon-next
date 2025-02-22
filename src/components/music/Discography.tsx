'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MusicPlayer from './MusicPlayer';
import { getAssetPath } from '@/utils/assetPath';

const releases = [
  {
    title: 'Moolah',
    coverImage: getAssetPath('/images/moolah-cover.jpg'),
    description: 'Latest single showcasing the evolution of sound',
    streamingLinks: [
      {
        platform: 'Spotify',
        url: 'https://open.spotify.com/track/moolah'
      },
      {
        platform: 'Apple Music',
        url: 'https://music.apple.com/track/moolah'
      }
    ]
  }
];

export default function Discography() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true
  });

  return (
    <section id="latest-release" className="section-padding bg-black">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gold text-center mb-12">Latest Releases</h2>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              },
              hidden: {
                opacity: 0
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {releases.map((release) => (
              <MusicPlayer key={release.title} {...release} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
