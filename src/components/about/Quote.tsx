'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Quote() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-b from-black to-emerald-950"
    >
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-emerald-400 italic"
          >
            "Music is how I turn my story into a celebration."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/music"
              className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-emerald-600 transition-colors duration-200"
            >
              Listen to My Music
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
