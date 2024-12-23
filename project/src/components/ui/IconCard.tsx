import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  color = 'text-primary',
}) => {
  return (
    <div className="p-6 rounded-xl bg-white card-shadow-hover hover-scale animate-fadeIn">
      <div className={`${color} mb-4`}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default IconCard;