import React from 'react';
import AboutSection from './sections/AboutSection';
import QuickLinksSection from './sections/QuickLinksSection';
import ContactSection from './sections/ContactSection';
import NewsletterSection from './sections/NewsletterSection';
import BottomBar from './components/BottomBar';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AboutSection />
          <QuickLinksSection />
          <ContactSection />
          <NewsletterSection />
        </div>
      </div>

      <BottomBar currentYear={currentYear} />
    </footer>
  );
};

export default Footer;