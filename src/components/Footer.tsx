'use client';

import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-8">
            <a
              href="https://instagram.com/lashon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://open.spotify.com/artist/lashon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaSpotify size={24} />
            </a>
            <a
              href="https://youtube.com/@lashon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaYoutube size={24} />
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Lashon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
