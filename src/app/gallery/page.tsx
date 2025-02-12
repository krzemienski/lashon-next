import PageHeader from '@/components/shared/PageHeader';
import PhotoGrid from '@/components/gallery/PhotoGrid';

export const metadata = {
  title: 'Gallery | Lashon Music',
  description: 'Explore the visual journey of Lashon through performance shots, studio sessions, and promotional photography.',
};

export default function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Explore the visuals behind the music"
        imagePath="/images/gallery-2.jpg"
        imageAlt="Lashon in performance"
      />
      <PhotoGrid />
    </>
  );
}
