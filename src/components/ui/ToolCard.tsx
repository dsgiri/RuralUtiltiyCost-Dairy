import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronRight } from 'lucide-react';
import { Tool } from '../../data/tools';
import { useFavorites } from '../../hooks/useFavorites';

interface Props {
  tool: Tool;
}

export const ToolCard: React.FC<Props> = ({ tool }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(tool.id);

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow transition-all duration-200 flex flex-col overflow-hidden relative group h-full">
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase inline-block">
            {tool.category}
          </span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(tool.id);
            }}
            className="text-slate-300 hover:text-red-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-1 z-10 block"
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-4 w-4 ${fav ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>
        <h3 className="font-bold text-slate-800 text-sm mb-1">
          <Link to={tool.path} className="focus:outline-none before:absolute before:inset-0">
            {tool.title}
          </Link>
        </h3>
        <p className="text-xs text-slate-500 mt-1 mb-2 flex-grow">
          {tool.description}
        </p>
      </div>
      
      <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex justify-between items-center group-hover:bg-emerald-50/30 transition-colors">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Output: <span className="text-slate-600">{tool.primaryOutcome}</span></span>
        <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-emerald-600 transform group-hover:translate-x-0.5 transition-all" />
      </div>
    </div>
  );
};
