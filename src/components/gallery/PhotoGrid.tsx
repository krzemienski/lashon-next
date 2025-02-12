'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

const photos = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Lashon performing on stage',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Lashon studio session',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Lashon portrait',
  },
  {
    src: '/images/about-hero.jpg',
    alt: 'Lashon in performance',
  },
  {
    src: '/images/about-teaser.jpg',
    alt: 'Lashon promotional shot',
  },
  // Add more photos as they become available
];

export default function PhotoGrid() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section ref={ref} className="section-padding bg-black">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative aspect-[3/4] cursor-pointer group"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setSelectedPhoto(null)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-6xl aspect-[3/2]">
              <Image
                src={selectedPhoto}
                alt="Selected photo"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
