import React, { useState } from 'react';

export const BreakEven: React.FC = () => {
  const [milkPerCow, setMilkPerCow] = useState<number>(75);
  const [feedCostPerCow, setFeedCostPerCow] = useState<number>(7.50);
  const [operatingCostPerCow, setOperatingCostPerCow] = useState<number>(5.50);
  const [fixedCostPerCow, setFixedCostPerCow] = useState<number>(3.00);

  const totalCostPerCowPerDay = feedCostPerCow + operatingCostPerCow + fixedCostPerCow;
  // Breakeven price per CWT = (Total Cost per Cow per Day / Milk per Cow per Day) * 100
  const breakEvenPrice = (totalCostPerCowPerDay / milkPerCow) * 100;

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Break-Even Milk Price</h1>
        <p className="text-sm text-slate-500 mt-1">Determine the break-even milk price to cover all operating and fixed costs.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Daily Costs Per Cow</h3>
            
             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Avg Milk per Cow/Day (lbs)</label>
              <input 
                type="number" 
                value={milkPerCow} 
                onChange={e => setMilkPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Feed Cost ($/day)</label>
              <input 
                type="number" 
                step="0.1"
                value={feedCostPerCow} 
                onChange={e => setFeedCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Other Operating Costs ($/day)</label>
              <p className="text-[10px] text-slate-400 mb-1">Labor, vet, supplies, fuel</p>
              <input 
                type="number" 
                step="0.1"
                value={operatingCostPerCow} 
                onChange={e => setOperatingCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Fixed Costs ($/day)</label>
              <p className="text-[10px] text-slate-400 mb-1">Depreciation, interest, taxes, insurance</p>
              <input 
                type="number" 
                step="0.1"
                value={fixedCostPerCow} 
                onChange={e => setFixedCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">Break-Even Price</span>
             <span className="text-6xl font-bold text-slate-800 mb-2">${breakEvenPrice.toFixed(2)} <span className="text-2xl font-bold text-slate-400 ml-1">/ CWT</span></span>
             <p className="text-xs font-medium text-slate-500 mt-2">Minimum milk price needed to cover all expenses.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Cost Breakdown Contribution ($/CWT)</h3>
            <div className="space-y-3 mt-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs font-bold text-slate-500">Feed Cost</span>
                <span className="text-sm font-bold text-slate-800">${((feedCostPerCow / milkPerCow) * 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-xs font-bold text-slate-500">Operating Cost</span>
                <span className="text-sm font-bold text-slate-800">${((operatingCostPerCow / milkPerCow) * 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs font-bold text-slate-500">Fixed Cost</span>
                <span className="text-sm font-bold text-slate-800">${((fixedCostPerCow / milkPerCow) * 100).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
