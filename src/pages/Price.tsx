import React, { useState } from 'react';

export const Price: React.FC = () => {
  const [basePrice, setBasePrice] = useState<number>(18.50);
  const [fatPercent, setFatPercent] = useState<number>(3.8);
  const [proteinPercent, setProteinPercent] = useState<number>(3.1);
  const [otherSolids, setOtherSolids] = useState<number>(5.7);

  // Simple pricing model (example based on a simplified multiple component pricing)
  // These multipliers are illustrative.
  const fatDiffMultiplier = 0.25; 
  const proteinDiffMultiplier = 0.20;

  const baseFat = 3.5;
  const baseProtein = 3.0;

  const fatValue = (fatPercent - baseFat) * 10 * fatDiffMultiplier;
  const proteinValue = (proteinPercent - baseProtein) * 10 * proteinDiffMultiplier;
  
  const estimatedPrice = basePrice + fatValue + proteinValue;

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Milk Price Calculator</h1>
        <p className="text-sm text-slate-500 mt-1">Calculate estimated milk revenue factoring in base price and component premiums.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Pricing Factors</h3>
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Base Price ($/CWT)</label>
              <input 
                type="number" 
                step="0.1"
                value={basePrice} 
                onChange={e => setBasePrice(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Butterfat (%)</label>
              <input 
                type="number" 
                step="0.1"
                value={fatPercent} 
                onChange={e => setFatPercent(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Protein (%)</label>
              <input 
                type="number" 
                step="0.1"
                value={proteinPercent} 
                onChange={e => setProteinPercent(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Other Solids (%)</label>
              <input 
                type="number" 
                step="0.1"
                value={otherSolids} 
                onChange={e => setOtherSolids(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center h-full min-h-[300px]">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Estimated Pay Price</span>
             <span className="text-6xl font-bold text-slate-800 mb-6">${estimatedPrice.toFixed(2)} <span className="text-2xl text-slate-400 font-medium ml-1">/ CWT</span></span>
             
             <div className="w-full max-w-sm mt-4 bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Base</span>
                  <span className="text-sm font-bold text-slate-800">${basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Fat Premium</span>
                  <span className={`text-sm font-bold ${fatValue >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {fatValue >= 0 ? '+' : ''}${fatValue.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Protein Premium</span>
                  <span className={`text-sm font-bold ${proteinValue >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                    {proteinValue >= 0 ? '+' : ''}${proteinValue.toFixed(2)}
                  </span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
