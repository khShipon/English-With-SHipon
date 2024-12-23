import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="theme-gradient text-white py-20 px-6 rounded-3xl mx-4 my-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <GraduationCap className="h-16 w-16 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Master English with Confidence
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Join millions of learners worldwide and start your journey today
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold 
                         flex items-center mx-auto hover-scale">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;