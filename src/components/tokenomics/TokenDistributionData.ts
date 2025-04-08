
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
    color: '#0EF34B',
    description: 'Incentives for users, developers and community participants' 
  },
  { 
    name: 'Marketing', 
    value: 15, 
    color: '#D946EF',
    description: 'Global marketing campaigns and partnerships'
  },
  { 
    name: 'Liquidity', 
    value: 15, 
    color: '#0FF5CE',
    description: 'Exchange liquidity pools and market making'
  },
  { 
    name: 'Development & Research', 
    value: 10, 
    color: '#00AEFF',
    description: 'Core platform development and AI research'
  },
  { 
    name: 'Team', 
    value: 12, 
    color: '#8B5CF6',
    description: 'Core team allocation with 2-year vesting'
  },
  { 
    name: 'DAO', 
    value: 9, 
    color: '#3B82F6',
    description: 'Decentralized governance treasury'
  },
  { 
    name: 'Private', 
    value: 8, 
    color: '#FFFFFF',
    description: 'Strategic investors with 1-year vesting'
  },
  { 
    name: 'Public', 
    value: 5, 
    color: '#F59E0B',
    description: 'Public sale with no vesting'
  },
  { 
    name: 'Pre-Sale 2', 
    value: 5, 
    color: '#FF79C6',
    description: 'Second pre-sale round with 6-month vesting'
  },
  { 
    name: 'Pre-Sale 1', 
    value: 3, 
    color: '#10B981',
    description: 'First pre-sale round with 9-month vesting'
  },
  { 
    name: 'Advisors', 
    value: 2, 
    color: '#F43F5E',
    description: 'Strategic advisors with 18-month vesting'
  },
  { 
    name: 'KOL Round', 
    value: 1, 
    color: '#06B6D4',
    description: 'Key Opinion Leaders with 3-month vesting'
  },
];

// Unlock schedules for different allocation categories
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
