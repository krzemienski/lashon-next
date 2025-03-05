import Intro from '@/components/home/Intro';
import FeaturedRelease from '@/components/home/FeaturedRelease';
import AboutTeaser from '@/components/home/AboutTeaser';

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
    </main>
  );
}
