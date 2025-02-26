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
    <footer className="bg-black text-white py-8">
      <div className="container-width">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl xs:text-3xl sm:text-4xl font-amsterdam text-gold hover:text-burnt-orange transition-colors leading-[1.1]">
              Lashon
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/lashonofficiall?igsh=OXUyNTFmZmp4NG44&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1DoZymVpVz/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              Facebook
            </a>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Lashon Music. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
