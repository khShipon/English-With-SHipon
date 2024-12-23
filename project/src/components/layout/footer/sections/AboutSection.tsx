import React from 'react';
import FooterSection from '../components/FooterSection';
import SocialLinks from '../components/SocialLinks';
import Logo from '../../Logo';

const AboutSection: React.FC = () => {
  return (
    <FooterSection title="About Us">
      <div className="mb-4">
        <Logo className="text-white" />
      </div>
      <p className="text-gray-400 mb-4">
        Empowering learners worldwide with comprehensive English education through innovative and engaging methods.
      </p>
      <SocialLinks />
    </FooterSection>
  );
};

export default AboutSection;