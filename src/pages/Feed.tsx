import React, { useState } from 'react';

export const Feed: React.FC = () => {
  const [milkPrice, setMilkPrice] = useState<number>(20.00);
  const [milkPerCow, setMilkPerCow] = useState<number>(80);
  const [feedCostPerCow, setFeedCostPerCow] = useState<number>(7.50);
  const [herdSize, setHerdSize] = useState<number>(500);

  const milkRevenuePerCow = (milkPerCow / 100) * milkPrice;
  const iofcPerCow = milkRevenuePerCow - feedCostPerCow;
  const iofcHerd = iofcPerCow * herdSize;

  const feedCostPercentage = (feedCostPerCow / milkRevenuePerCow) * 100;

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Income Over Feed Cost (IOFC)</h1>
        <p className="text-sm text-slate-500 mt-1">Calculate feed efficiency and daily income over feed cost per cow and herd.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Inputs</h3>
            
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Milk Price ($/CWT)</label>
              <input 
                type="number" 
                step="0.1"
                value={milkPrice} 
                onChange={e => setMilkPrice(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

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
              <label className="block text-xs font-bold text-slate-600 mb-1">Total Feed Cost/Cow/Day ($)</label>
              <input 
                type="number" 
                step="0.1"
                value={feedCostPerCow} 
                onChange={e => setFeedCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Herd Size (Milking Cows)</label>
              <input 
                type="number" 
                value={herdSize} 
                onChange={e => setHerdSize(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">IOFC / Cow / Day</span>
              <span className={`text-4xl font-bold ${iofcPerCow >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                ${iofcPerCow.toFixed(2)}
              </span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Herd IOFC / Day</span>
              <span className={`text-4xl font-bold ${iofcHerd >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                ${iofcHerd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Economics Breakdown</h3>
            
            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-xs font-bold text-slate-500">Feed Cost</span>
                    <span className="text-xs font-bold text-slate-800">{feedCostPercentage.toFixed(1)}% of Revenue</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className={`bg-amber-500 h-3 rounded-full ${feedCostPercentage > 100 ? 'w-full bg-red-500' : ''}`} style={{ width: `${Math.min(feedCostPercentage, 100)}%` }}></div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Revenue / Cow / Day</p>
                    <p className="text-lg font-bold text-slate-800">${milkRevenuePerCow.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Feed Cost / CWT</p>
                    <p className="text-lg font-bold text-slate-800">${((feedCostPerCow / milkPerCow) * 100).toFixed(2)}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
