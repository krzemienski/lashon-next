import PageHeader from '@/components/shared/PageHeader';
import MusicPlayer from '@/components/music/MusicPlayer';
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
              coverImage={getAssetPath('/images/woman-cover.jpg')}
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
                }
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
