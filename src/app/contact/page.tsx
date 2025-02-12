import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { getAssetPath } from '@/utils/assetPath';

export const metadata = {
  title: 'Contact | Lashon',
  description: 'Get in touch with Lashon for bookings, collaborations, or just to say hello.',
  themeColor: '#000000',
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact"
        description="Let's Connect"
        imageSrc={getAssetPath('/images/gallery-3.jpg')}
      />
      <ContactForm />
    </main>
  );
}
