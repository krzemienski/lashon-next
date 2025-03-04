'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { getAssetPath } from '@/utils/assetPath';

export default function AboutTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    once: true
  });

  return (
    <section ref={ref} className="section-padding bg-black py-16 sm:py-20 md:py-24">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-400 mb-3 sm:mb-4">About Me</h2>
            <p className="text-gray-300">
              From MVP athlete to soul-stirring artist, my journey has been anything but
              conventional. Born and raised in Miami, my path has led me from the courts
              to the recording studio, where I now create music that moves both body and soul.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
              <Link
                href="/about"
                className="btn-primary inline-block px-5 sm:px-6 py-2.5 sm:py-3"
              >
                Learn More
              </Link>
              <a
                href="https://www.instagram.com/lashonofficiall?igsh=OXUyNTFmZmp4NG44&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block px-4 sm:px-5 py-2.5 sm:py-3"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1DoZymVpVz/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block px-4 sm:px-5 py-2.5 sm:py-3"
              >
                Facebook
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square"
          >
            <img
              src={getAssetPath('/images/gallery-1.jpg')}
              alt="Lashon performing"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
