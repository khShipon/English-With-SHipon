import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  Icon: LucideIcon;
  content: React.ReactNode;
  alignTop?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ Icon, content, alignTop = false }) => {
  return (
    <div className={`flex ${alignTop ? 'items-start' : 'items-center'}`}>
      <Icon className="h-5 w-5 mr-3 mt-1 text-blue-500" />
      <p>{content}</p>
    </div>
  );
};

export default ContactItem;