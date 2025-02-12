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
    <footer className="bg-black text-white">
      <div className="container-width py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Join the Inner Circle</h3>
            <p className="text-gray-300 mb-4">
              Be the first to hear about new music and shows.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lashon Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
