import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import { images } from '@/utils/images';

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
        imageSrc={images.gallery3.src}
      />
      <ContactForm />
    </main>
  );
}
