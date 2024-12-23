import React from 'react';
import IconCard from './IconCard';
import { features } from '../../constants/features';

const FeatureSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {features.map((feature, index) => (
        <IconCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          color={feature.color}
        />
      ))}
    </div>
  );
};

export default FeatureSection;