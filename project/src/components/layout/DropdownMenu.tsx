import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItems } from '../../types';

interface DropdownMenuProps {
  item: NavItems;
  activeSection: string;
  handleSectionChange: (section: string) => void;
  isMobile?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  item,
  activeSection,
  handleSectionChange,
  isMobile = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseButtonClasses = isMobile
    ? "w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium"
    : "flex items-center px-3 py-2 rounded-md text-sm font-medium";

  const dropdownClasses = isMobile
    ? "w-full mt-1 py-1 bg-white rounded-md shadow-lg"
    : "absolute left-0 w-48 mt-2 py-1 bg-white rounded-md shadow-lg";

  return (
    <div ref={dropdownRef} className={`relative ${isMobile ? 'w-full' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseButtonClasses} ${
          activeSection === item.id
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        <span className="flex items-center">
          <item.icon className={`${isMobile ? 'h-5 w-5 mr-2' : 'h-4 w-4 mr-1'}`} />
          {item.label}
        </span>
        <ChevronDown
          className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4 ml-1'} transform ${
            isOpen ? 'rotate-180' : ''
          } transition-transform duration-200`}
        />
      </button>

      {isOpen && item.subItems && (
        <div className={dropdownClasses}>
          {item.subItems.map((subItem) => (
            <button
              key={subItem.id}
              onClick={() => {
                handleSectionChange(`${item.id}-${subItem.id}`);
                setIsOpen(false);
              }}
              className={`${
                isMobile ? 'px-4' : 'px-3'
              } py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100`}
            >
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;