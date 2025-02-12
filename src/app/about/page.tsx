import PageHeader from '@/components/shared/PageHeader';
import Story from '@/components/about/Story';
import { getAssetPath } from '@/utils/assetPath';

export const metadata = {
  title: 'About | Lashon',
  description: 'Learn about Lashon\'s journey from MVP athlete to rising music star.',
  themeColor: '#000000',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About"
        description="From MVP to Music"
        imageSrc={getAssetPath('/images/about-hero.jpg')}
      />
      <Story />
    </main>
  );
}
