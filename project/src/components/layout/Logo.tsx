import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center hover-scale ${className}`}>
      <GraduationCap className="h-8 w-8 text-primary animate-pulse" />
      <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        EnglishMaster
      </span>
    </div>
  );
};

export default Logo;