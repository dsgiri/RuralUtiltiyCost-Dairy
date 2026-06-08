export interface Tool {
  id: string;
  title: string;
  description: string;
  category: string;
  primaryOutcome: string;
  path: string;
}

export const TOOLS: Tool[] = [
  {
    id: 'forecast',
    title: 'Milk Production Forecast',
    description: 'Estimate milk production over time based on herd size and lactation curves.',
    category: 'Production Forecast',
    primaryOutcome: 'Total Milk Output',
    path: '/forecast'
  },
  {
    id: 'price',
    title: 'Milk Price Calculator',
    description: 'Calculate milk revenue factoring in base price, fat, and SNF premiums.',
    category: 'Milk Pricing',
    primaryOutcome: 'Estimated Revenue',
    path: '/price'
  },
  {
    id: 'feed',
    title: 'Income Over Feed Cost',
    description: 'Calculate feed cost and income over feed cost based on rations and yield.',
    category: 'Feed Cost',
    primaryOutcome: 'IOFC per Cow & Herd',
    path: '/feed'
  },
  {
    id: 'breakeven',
    title: 'Break-Even Milk Price',
    description: 'Determine the break-even milk price to cover all operating and fixed costs.',
    category: 'Break-Even',
    primaryOutcome: 'Break-Even Price/CWT',
    path: '/breakeven'
  },
  {
    id: 'margin',
    title: 'Margin Coverage & Risk',
    description: 'Estimate risk exposure and margin sensitivity to milk and feed price changes.',
    category: 'Risk Management',
    primaryOutcome: 'Margin Risk Profile',
    path: '/margin'
  },
  {
    id: 'expand',
    title: 'Dairy Expansion Planner',
    description: 'Model herd expansion, added costs, added production, and expected payback.',
    category: 'Expansion',
    primaryOutcome: 'Expansion ROI & Payback',
    path: '/expand'
  }
];
