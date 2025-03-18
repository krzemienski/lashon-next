import Intro from '@/components/home/Intro';
import FeaturedRelease from '@/components/home/FeaturedRelease';
import AboutTeaser from '@/components/home/AboutTeaser';
import YouTubeEmbed from '@/components/music/YouTubeEmbed';

export const metadata = {
  title: 'Lashon Music',
  description: 'Miami-born artist Lashon fuses hip-hop, R&B, and soul into a powerful performance style.',
};

export default function Home() {
  return (
    <main>
      <Intro />
      <FeaturedRelease />
      <AboutTeaser />
      <section className="section-padding py-16 bg-black">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-8 text-center">Featured Performance</h2>
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
