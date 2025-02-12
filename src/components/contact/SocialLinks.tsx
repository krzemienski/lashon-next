'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';
import { socialLinks } from '@/data/navigation';

const iconMap = {
  spotify: FaSpotify,
  apple: FaApple,
  soundcloud: FaSoundcloud,
  youtube: FaYoutube,
  instagram: FaInstagram,
  twitter: FaTwitter,
  facebook: FaFacebookF,
};

export default function SocialLinks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-black to-emerald-950">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-emerald-400 mb-8">Connect with Me</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <div className="p-4 bg-gray-900 rounded-full group-hover:bg-emerald-500 transition-colors duration-200">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="text-sm">{link.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
