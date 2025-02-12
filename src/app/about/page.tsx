import PageHeader from '@/components/shared/PageHeader';
import Story from '@/components/about/Story';
import Quote from '@/components/about/Quote';

export const metadata = {
  title: 'About | Lashon Music',
  description: 'Learn about Miami-born artist Lashon, her journey from athlete to artist, and her unique fusion of hip-hop, R&B, and soul.',
};

export default function About() {
  return (
    <>
      <PageHeader
        title="Meet Lashon"
        subtitle="From athlete to artist, a journey of passion and purpose"
        imagePath="/images/about-hero.jpg"
        imageAlt="Lashon in performance"
      />
      <Story />
      <Quote />
    </>
  );
}
