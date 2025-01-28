import type { NextPage } from 'next';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { AppGrid } from '@/components/apps/AppGrid';
import { CategoryCard } from '@/components/categories/CategoryCard';
import { APPS_DATA } from '@/data/apps';
import { CATEGORIES_DATA } from '@/data/categories';

const Home: NextPage = () => {
  const featuredApps = APPS_DATA.slice(0, 4);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Featured Apps */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Apps</h2>
            <a href="/apps" className="text-indigo-600 hover:text-indigo-700">
              View all →
            </a>
          </div>
          <AppGrid apps={featuredApps} featured />
        </section>
        
        {/* Categories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES_DATA.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
