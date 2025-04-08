export interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
  description?: string;
}

export const tokenDistribution: TokenDistributionItem[] = [
  { 
    name: 'Ecosystem Rewards', 
    value: 15, 
    color: '#00F0B5',
  },
  { 
    name: 'Marketing', 
    value: 15, 
    color: '#FF56F6',
  },
  { 
    name: 'Liquidity', 
    value: 15, 
    color: '#FF56F6',
  },
  { 
    name: 'Development & Research', 
    value: 10, 
    color: '#00F0B5',
  },
  { 
    name: 'Team', 
    value: 12, 
    color: '#FF56F6',
  },
  { 
    name: 'DAO', 
    value: 9, 
    color: '#FF56F6',
  },
  { 
    name: 'Private', 
    value: 8, 
    color: '#FFFFFF',
  },
  { 
    name: 'Public', 
    value: 5, 
    color: '#FFFFFF',
  },
  { 
    name: 'Pre-Sale 2', 
    value: 5, 
    color: '#00F0B5',
  },
  { 
    name: 'Pre-Sale 1', 
    value: 2, 
    color: '#00F0B5',
  },
  { 
    name: 'Advisors', 
    value: 3, 
    color: '#FF56F6',
  },
  { 
    name: 'KOL Round', 
    value: 1, 
    color: '#FF56F6',
  },
];

// We'll keep these for reference, but they won't be used in the new design
export const unlockSchedules = [
  { category: 'Team', months: 24, initialUnlock: 0, schedule: 'Linear unlock after 6-month cliff' },
  { category: 'Private Sale', months: 12, initialUnlock: 10, schedule: 'Linear unlock after 10% TGE' },
  { category: 'Pre-Sale 2', months: 6, initialUnlock: 20, schedule: 'Linear unlock after 20% TGE' },
  { category: 'Pre-Sale 1', months: 9, initialUnlock: 15, schedule: 'Linear unlock after 15% TGE' },
  { category: 'Public Sale', months: 0, initialUnlock: 100, schedule: 'Fully unlocked at TGE' },
  { category: 'Advisors', months: 18, initialUnlock: 0, schedule: 'Linear unlock after 3-month cliff' },
  { category: 'Marketing', months: 36, initialUnlock: 5, schedule: 'Linear unlock after 5% TGE' },
  { category: 'Ecosystem', months: 48, initialUnlock: 5, schedule: 'Linear unlock after 5% TGE' },
];
