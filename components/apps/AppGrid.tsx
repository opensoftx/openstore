import React from 'react';
import { AppCard } from './AppCard';
import type { App } from '@/types/apps';

interface AppGridProps {
  apps: App[];
  featured?: boolean;
}

export const AppGrid = ({ apps, featured }: AppGridProps) => {
  return (
    <div className={`grid gap-6 ${featured ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
      {apps.map(app => (
        <AppCard 
          key={app.id}
          app={app}
          variant={featured ? 'featured' : 'default'}
        />
      ))}
    </div>
  );
};