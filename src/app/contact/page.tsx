import PageHeader from '@/components/shared/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import SocialLinks from '@/components/contact/SocialLinks';

export const metadata = {
  title: 'Contact | Lashon Music',
  description: 'Get in touch with Lashon for bookings, collaborations, or just to say hello. Connect on social media or send a message directly.',
};

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Let's connect and create something amazing"
        imagePath="/images/gallery-3.jpg"
        imageAlt="Lashon portrait"
      />
      <ContactForm />
      <SocialLinks />
    </>
  );
}
