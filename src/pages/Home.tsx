import React from 'react';
import { TOOLS } from '../data/tools';
import { ToolCard } from '../components/ui/ToolCard';

export const Home: React.FC = () => {
  const featuredTools = TOOLS.filter(t => ['forecast', 'expand', 'breakeven'].includes(t.id));
  const otherTools = TOOLS.filter(t => !['forecast', 'expand', 'breakeven'].includes(t.id));

  return (
    <div className="space-y-8 flex-1">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dashboard & Tools</h1>
        <p className="text-sm text-slate-500 mt-1">
          Decision-support tools for milk production, herd planning, feed efficiency, and margin analysis.
        </p>
      </header>
      
      <div className="flex flex-col gap-8">
        <section>
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 block">Primary Modeling Tools</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 block">Economics & Operations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
