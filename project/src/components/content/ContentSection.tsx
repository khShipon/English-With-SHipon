import React, { ReactElement } from 'react';

interface ContentSectionProps {
  activeSection: 'home' | 'grammar' | string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ activeSection }): ReactElement => {
  const renderContent = (): ReactElement => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold">Welcome to EnglishMaster</h2>
            <p className="text-gray-600">
              Start your journey to English fluency today with our comprehensive learning platform.
            </p>
          </div>
        );
      case 'grammar':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">English Grammar</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Common Tenses</h3>
              <div className="space-y-4">
                <div className="border-b pb-2">
                  <p className="font-medium">Present Simple</p>
                  <p className="text-gray-600">Used for habits and general truths</p>
                  <p className="text-sm text-gray-500">Example: I play tennis every Sunday.</p>
                </div>
                <div className="border-b pb-2">
                  <p className="font-medium">Present Continuous</p>
                  <p className="text-gray-600">Used for ongoing actions</p>
                  <p className="text-sm text-gray-500">Example: I am playing tennis now.</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a section to begin learning</div>;
    }
  };

  return <div className="bg-white rounded-lg shadow-md p-6">{renderContent()}</div>;
};

export default ContentSection;