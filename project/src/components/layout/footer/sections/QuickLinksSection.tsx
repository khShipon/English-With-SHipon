import React from 'react';
import FooterSection from '../components/FooterSection';
import FooterLink from '../components/FooterLink';

const QuickLinksSection: React.FC = () => {
  return (
    <FooterSection title="Quick Links">
      <FooterLink href="/courses">Our Courses</FooterLink>
      <FooterLink href="/teachers">Our Teachers</FooterLink>
      <FooterLink href="/pricing">Pricing Plans</FooterLink>
      <FooterLink href="/blog">Blog & News</FooterLink>
      <FooterLink href="/careers">Careers</FooterLink>
      <FooterLink href="/support">Support Center</FooterLink>
    </FooterSection>
  );
};

export default QuickLinksSection;