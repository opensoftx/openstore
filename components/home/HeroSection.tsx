import React from 'react';
import { Search } from 'lucide-react';

export const HeroSection = () => {
    return (
      <div className="relative overflow-hidden bg-gradient-to-b from-indigo-600/10 to-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Discover Amazing Open Source Apps
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Download and explore the best free and open source applications, 
            carefully curated for quality and security.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for apps..."
              className="w-full px-6 py-4 rounded-2xl border border-gray-200 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 pl-14"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
    );
  };
  