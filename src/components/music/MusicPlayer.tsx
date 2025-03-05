'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa';

interface MusicPlayerProps {
  coverImage?: string;
  title?: string;
  description?: string;
  streamingLinks?: {
    platform: string;
    url: string;
  }[];
}

export default function MusicPlayer({
  coverImage = 'https://via.placeholder.com/300',
  title = "Woman",
  description = "",
  streamingLinks = [
    {
      platform: "Spotify",
      url: "https://open.spotify.com/artist/2RP2ySZkyeBJ2HePYTpTve"
    },
    {
      platform: "Apple Music",
      url: "https://music.apple.com/us/artist/lashon/1745818645"
    }
  ]
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
      {/* Cover Art */}
      <div className="relative aspect-square">
        <Image
          src={coverImage}
          alt={`${title} cover art`}
          fill
          className="object-cover"
        />
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-200"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <FaPause className="w-12 h-12 text-white" />
          ) : (
            <FaPlay className="w-12 h-12 text-white" />
          )}
        </button>
      </div>

      {/* Track Info */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-4">
          {streamingLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
