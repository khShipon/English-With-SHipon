import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
    >
      {isMenuOpen ? (
        <X className="h-6 w-6 animate-bounceIn" />
      ) : (
        <Menu className="h-6 w-6 animate-bounceIn" />
      )}
    </button>
  );
};

export default MobileMenuButton;