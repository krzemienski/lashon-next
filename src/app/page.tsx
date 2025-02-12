import Intro from '@/components/home/Intro';
import FeaturedRelease from '@/components/home/FeaturedRelease';
import AboutTeaser from '@/components/home/AboutTeaser';

export const metadata = {
  title: 'Lashon - Official Website',
  description: 'Miami-Born • New York-Trained • Ready to Rise',
};

export default function Home() {
  return (
    <>
      <Intro />
      <FeaturedRelease />
      <AboutTeaser />
    </>
  );
}
