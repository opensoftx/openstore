import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
    appCount: number;
    color: string;
  };
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      href={`/categories/${category.id}`}
      className="group relative overflow-hidden rounded-2xl aspect-square"
    >
      <div className={`absolute inset-0 ${category.color} opacity-90 group-hover:scale-110 transition-transform duration-300`} />
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div className="text-white">
          <span className="text-4xl opacity-75">{category.icon}</span>
          <h3 className="text-xl font-semibold mt-4">{category.name}</h3>
          <p className="text-white/80 mt-1">{category.appCount} apps</p>
        </div>
        
        <div className="flex justify-end">
          <ArrowRight className="text-white/80 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};