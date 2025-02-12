'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { getAssetPath } from '@/utils/assetPath';

const photos = [
  {
    src: getAssetPath('/images/gallery-1.jpg'),
    alt: 'Lashon performing in a black dress',
  },
  {
    src: getAssetPath('/images/gallery-2.jpg'),
    alt: 'Lashon at the white piano',
  },
  {
    src: getAssetPath('/images/gallery-3.jpg'),
    alt: 'Lashon in performance',
  },
  {
    src: getAssetPath('/images/about-hero.jpg'),
    alt: 'Lashon portrait',
  },
  {
    src: getAssetPath('/images/about-teaser.jpg'),
    alt: 'Lashon in the studio',
  },
];

export default function PhotoGrid() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setIndex(i)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </>
  );
}
