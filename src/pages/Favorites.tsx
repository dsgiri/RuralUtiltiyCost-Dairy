import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import { TOOLS } from '../data/tools';
import { ToolCard } from '../components/ui/ToolCard';
import { Heart } from 'lucide-react';

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();
  const favoriteTools = TOOLS.filter(tool => favorites.includes(tool.id));

  return (
    <div className="space-y-8 flex-1">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500 fill-red-500" /> Saved Tools
        </h1>
        <p className="text-sm text-slate-500 mt-1">Quick access to your frequently used agricultural tools.</p>
      </header>
      
      {favoriteTools.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
          <Heart className="h-12 w-12 text-slate-200 mb-4" />
          <p className="text-sm font-bold text-slate-600">You haven't saved any tools yet.</p>
          <p className="text-xs text-slate-400 mt-2 max-w-sm">Click the heart icon on any tool card to save it here for quick access.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
};
