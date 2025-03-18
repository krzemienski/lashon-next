'use client';

import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "Featured Video",
  description = ""
}: YouTubeEmbedProps) {
  // Extract video ID from URL if full URL is provided
  const extractedVideoId = videoId.includes('youtu.be/') || videoId.includes('youtube.com/') 
    ? videoId.split(/v\/|v=|youtu\.be\//)[1]?.split(/[?&]/)[0]
    : videoId;
    
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl mb-8">
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          src={`https://www.youtube.com/embed/${extractedVideoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-gold mb-2">{title}</h3>
        {description && <p className="text-gray-300 mb-4">{description}</p>}
      </div>
    </div>
  );
}
