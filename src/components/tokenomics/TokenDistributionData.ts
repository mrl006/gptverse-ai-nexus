
export interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
  description?: string; // Added description as optional property
}

export const tokenDistribution: TokenDistributionItem[] = [
  { name: 'Ecosystem', value: 15, color: '#8B5CF6' },
  { name: 'Marketing', value: 15, color: '#D946EF' },
  { name: 'Liquidity', value: 15, color: '#0FF5CE' },
  { name: 'Development', value: 10, color: '#00AEFF' },
  { name: 'Team', value: 12, color: '#6E59A5' },
  { name: 'DAO', value: 9, color: '#3B82F6' },
  { name: 'Private', value: 8, color: '#F0F0F0' },
  { name: 'Public', value: 5, color: '#F97316' },
  { name: 'Pre-Sale 2', value: 5, color: '#FF79C6' },
  { name: 'Pre-Sale 1', value: 3, color: '#10B981' },
  { name: 'Advisors', value: 2, color: '#F43F5E' },
  { name: 'KOL Round', value: 1, color: '#06B6D4' },
];

// Adding unlockSchedules data that's missing but referenced in VestingTabContent
export const unlockSchedules = [
  {
    category: 'Team',
    months: 24,
    initialUnlock: 0,
    schedule: 'Linear unlock after 12 months cliff'
  },
  {
    category: 'Advisors',
    months: 18,
    initialUnlock: 5,
    schedule: 'Linear unlock after 6 months cliff'
  },
  {
    category: 'Private Sale',
    months: 12,
    initialUnlock: 10,
    schedule: 'Linear unlock after 3 months cliff'
  },
  {
    category: 'Public Sale',
    months: 6,
    initialUnlock: 25,
    schedule: 'Linear unlock over 6 months'
  },
  {
    category: 'Ecosystem',
    months: 36,
    initialUnlock: 5,
    schedule: 'Linear unlock based on milestones'
  }
];
