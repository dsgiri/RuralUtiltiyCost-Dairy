import React, { useState } from 'react';

export const Expand: React.FC = () => {
  const [currentCows, setCurrentCows] = useState<number>(300);
  const [addedCows, setAddedCows] = useState<number>(100);
  const [costPerCow, setCostPerCow] = useState<number>(4500); // Housing, equipment, cow purchase
  const [projectedIofcPerCowYearly, setProjectedIofcPerCowYearly] = useState<number>(2500);

  const totalCapitalRequired = addedCows * costPerCow;
  const addedAnnualMargin = addedCows * projectedIofcPerCowYearly;
  const simplePaybackYears = totalCapitalRequired / addedAnnualMargin;

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dairy Expansion Planner</h1>
        <p className="text-sm text-slate-500 mt-1">Model herd expansion, added costs, added production, and expected payback.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">Expansion Assumptions</h3>
            
             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Current Herd Size</label>
              <input 
                type="number" 
                value={currentCows} 
                onChange={e => setCurrentCows(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Cows to Add</label>
              <input 
                type="number" 
                value={addedCows} 
                onChange={e => setAddedCows(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Capital Cost per Added Cow ($)</label>
              <p className="text-[10px] text-slate-400 mb-1">Includes facilities and cow purchase</p>
              <input 
                type="number" 
                value={costPerCow} 
                onChange={e => setCostPerCow(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

             <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Projected Annual IOFC / Cow ($)</label>
              <input 
                type="number" 
                value={projectedIofcPerCowYearly} 
                onChange={e => setProjectedIofcPerCowYearly(Number(e.target.value))}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Total Capital Required</span>
              <span className="text-4xl font-bold text-slate-800">${totalCapitalRequired.toLocaleString()}</span>
            </div>
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Added Annual Margin</span>
              <span className="text-4xl font-bold text-emerald-600">${addedAnnualMargin.toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2 block text-center w-full">Simple Payback Period</h3>
             <div className="flex items-end justify-center gap-2 mt-4">
               <span className={`text-6xl font-bold ${simplePaybackYears > 7 ? 'text-amber-500' : 'text-emerald-600'}`}>
                 {simplePaybackYears.toFixed(1)}
               </span>
               <span className="text-xl font-bold text-slate-400 pb-2">Years</span>
             </div>
             <p className="text-xs font-medium text-slate-500 mt-6 text-center max-w-md">
               This is a simplified payback calculation. It does not account for interest rates, inflation, or tax implications of depreciation. Consult a financial advisor for detailed planning.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};
