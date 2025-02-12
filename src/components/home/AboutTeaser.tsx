'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
            <h2 className="text-4xl font-bold text-emerald-400">About Lashon</h2>
            <p className="text-gray-300">
              From MVP athlete to rising music star, Lashon's journey is one of passion
              and transformation. With 15 MVP awards in basketball and a background in
              theatre, she brings a unique perspective to her music that sets her apart
              in the industry.
            </p>
            <div>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[3/4]"
          >
            <Image
              src="/images/gallery-1.jpg"
              alt="Lashon portrait"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
