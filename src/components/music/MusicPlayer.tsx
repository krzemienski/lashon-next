'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa';

interface MusicPlayerProps {
  coverImage?: string;
  title?: string;
  streamingLinks?: {
    name: string;
    href: string;
  }[];
}

export default function MusicPlayer({ 
  coverImage = 'https://via.placeholder.com/300',
  title = "Moolah",
  streamingLinks = [
    {
      name: "Spotify",
      href: "https://open.spotify.com/track/moolah"
    },
    {
      name: "Apple Music",
      href: "https://music.apple.com/track/moolah"
    }
  ]
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
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
        >
          {isPlaying ? (
            <FaPause className="h-12 w-12 text-white" />
          ) : (
            <FaPlay className="h-12 w-12 text-white" />
          )}
        </button>
      </div>

      {/* Track Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {streamingLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
            >
              Listen on {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
