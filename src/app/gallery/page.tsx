import PageHeader from '@/components/shared/PageHeader';
import PhotoGrid from '@/components/gallery/PhotoGrid';
import { images } from '@/utils/images';

export const metadata = {
  title: 'Gallery | Lashon',
  description: 'View photos from Lashon\'s performances, studio sessions, and more.',
  themeColor: '#000000',
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        title="Gallery"
        description="Moments in Motion"
        imageSrc={images.gallery2.src}
      />
      <PhotoGrid />
    </main>
  );
}
