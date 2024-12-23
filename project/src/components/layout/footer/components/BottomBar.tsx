import React from 'react';
import FooterLink from './FooterLink';

interface BottomBarProps {
  currentYear: number;
}

const BottomBar: React.FC<BottomBarProps> = ({ currentYear }) => {
  return (
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-sm text-gray-400">
            © {currentYear} EnglishMaster. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-400">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
            <FooterLink href="/sitemap">Sitemap</FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;