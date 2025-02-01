'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { APPS_DATA } from "@/data/apps";
import { CATEGORIES_DATA } from "@/data/categories";
import { App, Category } from "@/types/apps";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<{
    apps: App[];
    categories: Category[];
  }>({ apps: [], categories: [] });
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setSearchResults({ apps: [], categories: [] });
      return;
    }
    
    const searchLower = value.toLowerCase();
    
    // Search apps
    const filteredApps = APPS_DATA.filter(app => 
      app.name.toLowerCase().includes(searchLower) ||
      app.description.toLowerCase().includes(searchLower) ||
      app.category.toLowerCase().includes(searchLower) ||
      app.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );

    // Search categories
    const filteredCategories = CATEGORIES_DATA.filter(category =>
      category.name.toLowerCase().includes(searchLower)
    );

    setSearchResults({
      apps: filteredApps,
      categories: filteredCategories
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            OpenStore
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {["Apps", "Categories", "Updates", "Blog"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white/90 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative" ref={searchRef}>
              <button 
                className="text-white/90 hover:text-white p-2"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg p-4 z-50">
                  <div className="flex items-center border-b border-gray-200 pb-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full ml-2 outline-none text-gray-700 placeholder-gray-400"
                      placeholder="Search apps and categories..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        handleSearch(e.target.value);
                      }}
                      autoFocus
                    />
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {(searchResults.apps.length > 0 || searchResults.categories.length > 0) ? (
                    <div className="mt-4 space-y-4">
                      {searchResults.categories.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">Categories</h3>
                          <div className="space-y-2">
                            {searchResults.categories.map((category) => (
                              <Link
                                key={category.id}
                                href={`/categories/${category.id}`}
                                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                              >
                                <span className="text-xl mr-2">{category.icon}</span>
                                <div>
                                  <div className="text-gray-800">{category.name}</div>
                                  <div className="text-sm text-gray-500">{category.appCount} apps</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {searchResults.apps.length > 0 && (
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">Apps</h3>
                          <div className="space-y-2">
                            {searchResults.apps.map((app) => (
                              <Link
                                key={app.id}
                                href={`/apps/${app.id}`}
                                className="flex items-center p-2 hover:bg-gray-100 rounded-md"
                              >
                                <img 
                                  src={app.icon} 
                                  alt={app.name} 
                                  className="w-8 h-8 rounded mr-3"
                                />
                                <div>
                                  <div className="text-gray-800">{app.name}</div>
                                  <div className="text-sm text-gray-500">{app.category}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : searchTerm ? (
                    <div className="text-gray-500 text-center py-4">
                      No results found
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            
            <SignedOut>
              <SignInButton>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;