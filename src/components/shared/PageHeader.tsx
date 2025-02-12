'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imagePath: string;
  imageAlt: string;
}

export default function PageHeader({ title, subtitle, imagePath, imageAlt }: PageHeaderProps) {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
