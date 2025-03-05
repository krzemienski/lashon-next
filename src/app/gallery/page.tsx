import PageHeader from '@/components/shared/PageHeader';
import PhotoGrid from '@/components/gallery/PhotoGrid';
import { getAssetPath } from '@/utils/assetPath';

export const metadata = {
  title: 'Gallery | Lashon',
  description: 'View photos from Lashon\'s performances, studio sessions, and more.',
};

export const viewport = {
  themeColor: '#000000',
};

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        title="Gallery"
        description="Moments in Motion"
        imageSrc={getAssetPath('/images/gallery-2.jpg')}
      />
      <PhotoGrid />
    </main>
  );
}
