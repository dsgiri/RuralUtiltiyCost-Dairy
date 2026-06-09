# Calculator Design & Implementation Standard

This document outlines the standard operating procedure for building new calculator modules within the Dairy Economics Hub. Adhering to this standard ensures all tools look and behave consistently for our users.

## 1. Tool Registration (`src/data/tools.ts`)
Before creating the UI, register the tool in the central dictionary:
```typescript
{
  id: 'unique_id',
  title: 'Clear Tool Name',
  description: 'Short, practical description of what the tool accomplishes.',
  category: 'System Category',
  primaryOutcome: 'Metric generated (e.g., IOFC per Cow)',
  path: '/route-path'
}
```

## 2. Layout & Grid Convention
Every calculator must implement the `Professional Polish` split-pane layout design.

### Page Header
```tsx
<header className="mb-8">
  <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Tool Name</h1>
  <p className="text-sm text-slate-500 mt-1">Brief subtitle explaining the purpose.</p>
</header>
```

### The Split-Grid
Use a 3-column grid on large screens. Inputs on the left (1 span), Output on the right (2 spans).
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Inputs Column */}
  <div className="lg:col-span-1 space-y-6">...</div>
  {/* Outputs Column */}
  <div className="lg:col-span-2 space-y-6">...</div>
</div>
```

## 3. Styling Forms / Inputs
Inputs should be concise and clearly labeled. Use `text-xs` bold headers and `emerald-500` focus rings.

```tsx
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-50 pb-2">
    Assumptions
  </h3>
  
  <div>
    <label className="block text-xs font-bold text-slate-600 mb-1">Input Name (Units)</label>
    <input 
      type="number" 
      value={stateValue} 
      onChange={e => setStateValue(Number(e.target.value))}
      className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
    />
  </div>
</div>
```

## 4. Styling Outputs & Visualizations
Primary outputs must immediately answer the user's implicit question. Group large metrics in a prominent hero block.

```tsx
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">
    Estimated Outcome Metric
  </span>
  <span className="text-6xl font-bold text-slate-800 mb-2">
    ${calculatedValue.toFixed(2)} 
    <span className="text-2xl font-bold text-slate-400 ml-1">/ CWT</span>
  </span>
</div>
```

## 5. Defensive Formatting
- Always handle `undefined`, `NaN`, or `Infinity` gracefully (e.g., dividing by zero milk produced).
- Format currency with `toFixed(2)` and volumes with `toLocaleString()`.
- Explicitly color-code deficits or risks (e.g., negative margins using `text-amber-500` or `text-red-500`, and positive growth using `text-emerald-600`).
