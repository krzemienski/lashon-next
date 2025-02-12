'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Story() {
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
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold text-emerald-400"
            >
              From MVP to Music
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 text-gray-300"
            >
              <p>
                Lashon Thomas, a dynamic hip-hop, R&B, and soul artist, found her passion
                for music after an accomplished athletic career—15 MVP awards and a spot
                in the Elite Youth Basketball League. Despite her success on the court,
                she felt drawn to the arts and pursued theatre at Florida A&M before
                transferring to the American Academy of Dramatic Arts in New York.
              </p>
              <p>
                It was there that she truly discovered her love for performing, but it
                wasn't until 2020 that her real musical journey began. After two years
                of intense study—and earning underground rap championship titles—Lashon
                is poised for a breakthrough year in 2023.
              </p>
              <p>
                Today, she fuses her athletic drive, theater background, and musical
                talent into an explosive sound that's all her own. Her performances
                combine the discipline of an athlete with the soul of an artist,
                creating an unforgettable experience for her audience.
              </p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative aspect-[3/4] lg:aspect-square"
          >
            <Image
              src="/images/gallery-2.jpg"
              alt="Lashon at the piano"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
