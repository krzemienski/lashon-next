'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation, socialLinks } from '@/data/navigation';
import {
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa';

const iconMap = {
  spotify: FaSpotify,
  apple: FaApple,
  soundcloud: FaSoundcloud,
  youtube: FaYoutube,
  instagram: FaInstagram,
  twitter: FaTwitter,
  facebook: FaFacebookF,
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-6 sm:py-8 md:py-10">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="mb-3 md:mb-0">
            <a href="/" className="text-2xl xs:text-3xl font-amsterdam text-gold hover:text-burnt-orange transition-colors leading-[1.1]">
              Lashon
            </a>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="https://www.instagram.com/lashonofficiall?igsh=OXUyNTFmZmp4NG44&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors text-sm sm:text-base"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1DoZymVpVz/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors text-sm sm:text-base"
            >
              Facebook
            </a>
          </div>
          <div className="mt-3 md:mt-0 text-xs sm:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Lashon Music. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
