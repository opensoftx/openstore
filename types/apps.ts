export type Platform = 'Windows' | 'Mac' | 'Linux' | 'Android' | 'iOS';

export interface App {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: string;
  stars: number;
  downloads: number;
  icon: string;
  screenshots: string[];
  version: string;
  size: string;
  platforms: Platform[];
  tags: string[];
  developer: string;
  website: string;
  lastUpdated: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  appCount: number;
  color: string;
}