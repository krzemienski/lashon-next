import PageHeader from '@/components/shared/PageHeader';
import Discography from '@/components/music/Discography';

export const metadata = {
  title: 'Music | Lashon Music',
  description: 'Listen to the latest releases from Lashon, featuring a unique blend of hip-hop, R&B, and soul music.',
};

export default function Music() {
  return (
    <>
      <PageHeader
        title="My Music"
        subtitle="A fusion of hip-hop, R&B, and soul"
        imagePath="/images/moolah-cover.jpg"
        imageAlt="Moolah single cover"
      />
      <Discography />
    </>
  );
}
