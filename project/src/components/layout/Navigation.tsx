import React from 'react';
import { NavItems } from '../../types';
import DropdownMenu from './DropdownMenu';

interface NavigationProps {
  navItems: NavItems[];
  activeSection: string;
  handleSectionChange: (section: string) => void;
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  navItems,
  activeSection,
  handleSectionChange,
  isMobile = false,
}) => {
  const baseClasses = isMobile
    ? "w-full flex items-center px-3 py-2 rounded-md text-base font-medium"
    : "flex items-center px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className={isMobile ? "flex flex-col space-y-1 p-2" : "flex space-x-4"}>
      {navItems.map((item) => (
        item.subItems ? (
          <DropdownMenu
            key={item.id}
            item={item}
            activeSection={activeSection}
            handleSectionChange={handleSectionChange}
            isMobile={isMobile}
          />
        ) : (
          <button
            key={item.id}
            onClick={() => handleSectionChange(item.id)}
            className={`${baseClasses} ${
              activeSection === item.id
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <item.icon className={`${isMobile ? 'h-5 w-5 mr-2' : 'h-4 w-4 mr-1'}`} />
            {item.label}
          </button>
        )
      ))}
    </nav>
  );
};

export default Navigation;