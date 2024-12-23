import React from 'react';
import FooterSection from '../components/FooterSection';
import Newsletter from '../components/Newsletter';

const NewsletterSection: React.FC = () => {
  return (
    <FooterSection title="Newsletter">
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest updates, learning tips, and exclusive offers.
      </p>
      <Newsletter />
    </FooterSection>
  );
};

export default NewsletterSection;