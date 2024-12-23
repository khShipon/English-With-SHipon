import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FooterSection from '../components/FooterSection';
import ContactItem from '../components/ContactItem';

const ContactSection: React.FC = () => {
  return (
    <FooterSection title="Contact Us">
      <div className="space-y-4">
        <ContactItem
          Icon={MapPin}
          content="123 Learning Street, Education City, EC 12345"
          alignTop
        />
        <ContactItem
          Icon={Phone}
          content="+1 (555) 123-4567"
        />
        <ContactItem
          Icon={Mail}
          content="contact@englishmaster.com"
        />
        <ContactItem
          Icon={Clock}
          content={<>Monday - Friday<br />9:00 AM - 6:00 PM EST</>}
          alignTop
        />
      </div>
    </FooterSection>
  );
};

export default ContactSection;