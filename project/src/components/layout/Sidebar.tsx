import React, { useState } from 'react';
import { NavItems } from '../../types';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface SidebarProps {
  navItems: NavItems[];
  activeSection: string;
  handleSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ navItems, activeSection, handleSectionChange }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="hidden md:block w-64 bg-white shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-4">Content</h2>
      <div className="space-y-2">
        {navItems.map(({ id, label, icon: Icon, subItems }, index) => (
          <div key={id} className="space-y-1">
            <button
              onClick={() => {
                if (subItems) {
                  toggleSection(id);
                } else {
                  handleSectionChange(id);
                }
              }}
              className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium ${
                activeSection.startsWith(id)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span className="flex items-center">
                <span className="mr-2">{index + 1}.</span>
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </span>
              {subItems && (
                expandedSections.includes(id) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )
              )}
            </button>
            {subItems && expandedSections.includes(id) && (
              <div className="ml-9 space-y-1">
                {subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => handleSectionChange(`${id}-${subItem.id}`)}
                    className={`w-full text-left px-3 py-1 rounded-md text-sm ${
                      activeSection === `${id}-${subItem.id}`
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;