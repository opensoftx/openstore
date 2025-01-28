// src/data/categories.ts
import { Category } from '@/types/apps';

export const CATEGORIES_DATA: Category[] = [
  {
    id: "development",
    name: "Development",
    icon: "👨‍💻",
    appCount: 245,
    color: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    id: "graphics",
    name: "Graphics & Design",
    icon: "🎨",
    appCount: 182,
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: "⚡️",
    appCount: 156,
    color: "bg-gradient-to-br from-orange-500 to-red-600"
  },
  {
    id: "communication",
    name: "Communication",
    icon: "💬",
    appCount: 98,
    color: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    id: "media",
    name: "Media & Entertainment",
    icon: "🎮",
    appCount: 134,
    color: "bg-gradient-to-br from-pink-500 to-rose-600"
  },
  {
    id: "security",
    name: "Security & Privacy",
    icon: "🔒",
    appCount: 76,
    color: "bg-gradient-to-br from-teal-500 to-emerald-600"
  },
  {
    id: "internet",
    name: "Internet & Browsers",
    icon: "🌐",
    appCount: 45,
    color: "bg-gradient-to-br from-cyan-500 to-blue-600"
  },
  {
    id: "utilities",
    name: "Utilities",
    icon: "🛠",
    appCount: 198,
    color: "bg-gradient-to-br from-amber-500 to-orange-600"
  }
];