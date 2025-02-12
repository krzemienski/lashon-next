'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { images } from '@/utils/images';

const photos = [
  {
    src: images.gallery1.src,
    width: images.gallery1.width,
    height: images.gallery1.height,
    alt: 'Lashon performing in a black dress',
  },
  {
    src: images.gallery2.src,
    width: images.gallery2.width,
    height: images.gallery2.height,
    alt: 'Lashon at the white piano',
  },
  {
    src: images.gallery3.src,
    width: images.gallery3.width,
    height: images.gallery3.height,
    alt: 'Lashon in performance',
  },
  {
    src: images.aboutHero.src,
    width: images.aboutHero.width,
    height: images.aboutHero.height,
    alt: 'Lashon portrait',
  },
  {
    src: images.aboutTeaser.src,
    width: images.aboutTeaser.width,
    height: images.aboutTeaser.height,
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
              width={photo.width}
              height={photo.height}
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
