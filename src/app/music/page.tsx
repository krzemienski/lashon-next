import PageHeader from '@/components/shared/PageHeader';
import MusicPlayer from '@/components/music/MusicPlayer';
import { getAssetPath } from '@/utils/assetPath';

export const metadata = {
  title: 'Music | Lashon',
  description: 'Listen to Lashon\'s latest releases and explore her unique fusion of hip-hop, R&B, and soul.',
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
              title="Moolah"
              description="Latest single showcasing the evolution of sound"
              coverImage={getAssetPath('/images/moolah-cover.jpg')}
              streamingLinks={[
                {
                  platform: 'Spotify',
                  url: 'https://open.spotify.com/track/moolah'
                },
                {
                  platform: 'Apple Music',
                  url: 'https://music.apple.com/track/moolah'
                }
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
