import portfolioRaw from '../../portfolio-sites.md?raw';

export interface PortfolioSite {
  priority: number;
  name: string;
  url: string;
  repo: string;
  category: string;
  description: string;
}

export function parsePortfolio(): PortfolioSite[] {
  const lines = portfolioRaw.split('\n');
  const sites: PortfolioSite[] = [];
  
  let inTable = false;
  let headersParsed = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('|')) {
      inTable = true;
      if (!headersParsed) {
        // Skip header and separator rows
        if (trimmed.includes('---')) {
            headersParsed = true;
        }
        continue;
      }
      
      const columns = trimmed.split('|').map(c => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
      
      if (columns.length >= 6) {
        sites.push({
          priority: parseInt(columns[0], 10) || 999,
          name: columns[1],
          url: columns[2],
          repo: columns[3],
          category: columns[4],
          description: columns[5]
        });
      }
    } else if (inTable) {
       // Table ended
       break;
    }
  }
  
  return sites.sort((a, b) => a.priority - b.priority);
}

export const PORTFOLIO_SITES = parsePortfolio();
