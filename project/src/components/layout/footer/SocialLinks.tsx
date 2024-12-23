import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-300 hover:text-white transition-colors duration-200"
        >
          <Icon className="h-6 w-6 hover:scale-110 transform transition-transform duration-200" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;