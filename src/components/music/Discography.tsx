'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import MusicPlayer from './MusicPlayer';

const releases = [
  {
    title: 'Moolah',
    coverImage: '/images/moolah-cover.jpg',
    streamingLinks: [
      {
        name: 'Spotify',
        href: 'https://open.spotify.com/track/moolah',
      },
      {
        name: 'Apple Music',
        href: 'https://music.apple.com/track/moolah',
      },
      {
        name: 'SoundCloud',
        href: 'https://soundcloud.com/lashonmusic/moolah',
      },
    ],
  },
  // Add more releases here as they become available
];

export default function Discography() {
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
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-emerald-400">Latest Releases</h2>
            <p className="text-gray-300">
              Experience the fusion of hip-hop, R&B, and soul in my latest tracks
            </p>
          </div>

          {/* Music Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
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
