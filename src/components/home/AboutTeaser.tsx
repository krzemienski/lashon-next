'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { images } from '@/utils/images';

export default function AboutTeaser() {
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
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-emerald-400 mb-4">About Me</h2>
            <p className="text-gray-300">
              From MVP athlete to soul-stirring artist, my journey has been anything but
              conventional. I bring the same passion and dedication that earned me 15 MVP
              awards in basketball to my music, creating a unique sound that combines raw
              energy with polished artistry.
            </p>
            <Link
              href="/about"
              className="btn-primary inline-block"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-square"
          >
            <img
              src={images.gallery1.src}
              alt="Lashon performing"
              width={images.gallery1.width}
              height={images.gallery1.height}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
