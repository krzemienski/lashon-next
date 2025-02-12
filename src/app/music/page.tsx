import PageHeader from '@/components/shared/PageHeader';
import MusicPlayer from '@/components/music/MusicPlayer';
import { images } from '@/utils/images';

export const metadata = {
  title: 'Music | Lashon',
  description: 'Listen to Lashon\'s latest releases and explore her unique fusion of hip-hop, R&B, and soul.',
  themeColor: '#000000',
};

export default function MusicPage() {
  return (
    <main>
      <PageHeader
        title="My Music"
        description="A fusion of hip-hop, R&B, and soul"
        imageSrc={images.gallery2.src}
      />
      <MusicPlayer />
    </main>
  );
}
