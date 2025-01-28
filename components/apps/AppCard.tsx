import React from 'react';
import Image from 'next/image';
import { Star, Download } from 'lucide-react';
import type { App } from '@/types/apps';

interface AppCardProps {
  app: App;
  variant?: 'default' | 'featured';
}

export const AppCard = ({ app, variant = 'default' }: AppCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <div className={`
      group relative bg-white rounded-2xl overflow-hidden transition-all duration-300
      ${isFeatured ? 'p-6 shadow-xl' : 'p-4 shadow-lg'}
      hover:shadow-2xl hover:scale-[1.02]
    `}>
      <div className="flex gap-4">
        <div className={`relative ${isFeatured ? 'w-24 h-24' : 'w-16 h-16'}`}>
          <Image
            src={app.icon}
            alt={app.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className={`font-semibold text-gray-900 ${isFeatured ? 'text-xl' : 'text-lg'}`}>
                {app.name}
              </h3>
              <p className="text-sm text-gray-500">{app.developer}</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              Download
            </button>
          </div>
          
          <p className={`text-gray-600 mt-2 ${isFeatured ? 'line-clamp-2' : 'line-clamp-1'}`}>
            {app.description}
          </p>
          
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center text-sm text-gray-500">
              <Star className="w-4 h-4 mr-1" />
              {app.stars}k
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Download className="w-4 h-4 mr-1" />
              {app.downloads.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">
              {app.size}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};