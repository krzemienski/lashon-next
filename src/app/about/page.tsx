import Story from '@/components/about/Story';

export const metadata = {
  title: 'About | Lashon',
  description: 'Learn about Lashon\'s journey from MVP athlete to rising music star.',
};

export const viewport = {
  themeColor: '#000000',
};

export default function AboutPage() {
  return (
    <main className="bg-black">
      <Story />
    </main>
  );
}
