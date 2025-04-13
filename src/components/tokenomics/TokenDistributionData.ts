
export interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
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
