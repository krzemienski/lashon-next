'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function PageHeader({ title, description, imageSrc }: PageHeaderProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={`${title} background`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div 
        className="container-width relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
