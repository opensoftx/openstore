'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { APPS_DATA } from '@/data/apps';
import { App } from '@/types/apps';

export const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<App[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const searchLower = value.toLowerCase();
    const filtered = APPS_DATA.filter(app => 
      app.name.toLowerCase().includes(searchLower) ||
      app.description.toLowerCase().includes(searchLower) ||
      app.category.toLowerCase().includes(searchLower) ||
      app.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );

    setSearchResults(filtered);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <div className="relative max-w-2xl mx-auto" ref={searchRef}>
          <input
            type="text"
            placeholder="Search for apps..."
            className="w-full px-6 py-4 rounded-2xl border border-gray-200 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 pl-14"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(e.target.value);
            }}
            onFocus={() => setIsFocused(true)}
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          {/* Search Results Dropdown */}
          {isFocused && searchTerm && (
            <div className="absolute w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 max-h-96 overflow-y-auto z-50">
              {searchResults.length > 0 ? (
                <div className="py-2">
                  {searchResults.map((app) => (
                    <Link
                      key={app.id}
                      href={`/apps/${app.id}`}
                      className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <img 
                        src={app.icon} 
                        alt={app.name}
                        className="w-10 h-10 rounded-lg mr-4"
                      />
                      <div className="flex-1 text-left">
                        <h3 className="font-medium text-gray-900">{app.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {app.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {app.category}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-gray-500">
                  No apps found matching your search
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;