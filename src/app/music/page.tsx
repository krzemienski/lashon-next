import PageHeader from '@/components/shared/PageHeader';
import MusicPlayer from '@/components/music/MusicPlayer';
import YouTubeEmbed from '@/components/music/YouTubeEmbed';
import { getAssetPath } from '@/utils/assetPath';

export const metadata = {
  title: 'Music | Lashon',
  description: 'Listen to Lashon\'s latest releases and explore her unique fusion of hip-hop, R&B, and soul.',
};

export const viewport = {
  themeColor: '#000000',
};

export default function MusicPage() {
  return (
    <main className="bg-black">
      <PageHeader
        title="Latest Releases"
        description="Experience the Sound"
        imageSrc={getAssetPath('/images/hero-explore.jpeg')}
      />
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MusicPlayer
              title="Woman"
              description="Latest single showcasing the evolution of sound"
              coverImage={getAssetPath('/images/woman.JPG')}
              streamingLinks={[
                {
                  platform: 'Spotify',
                  url: 'https://open.spotify.com/track/40ucNDEPQHb5nIcAa0XYGd?si=72ada46e9bda4251'
                },
                {
                  platform: 'Apple Music',
                  url: 'https://music.apple.com/us/album/woman/1776458294?i=1776458295'
                }
              ]}
            />
            <MusicPlayer
              title="Moolah"
              description="Hip-hop single with a unique sound"
              coverImage={getAssetPath('/images/moolah.jpg')}
              streamingLinks={[
                {
                  platform: 'Spotify',
                  url: 'https://open.spotify.com/track/1KzzUznXjhchvi1z0Ds89l?si=d2116b291b0d4832'
                },
                {
                  platform: 'Apple Music',
                  url: 'https://music.apple.com/us/album/moolah/1746215108?i=1746215110'
                }
              ]}
            />
          </div>
        </div>
      </section>
      
      <section className="section-padding pt-0">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed 
              videoId="T0GM7TKDXEU" 
              title="Lashon - Official Performance"
              description="Watch Lashon's latest performance showcasing her unique style and sound."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
