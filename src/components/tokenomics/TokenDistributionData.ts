
export interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
}

export const tokenDistribution: TokenDistributionItem[] = [
  { name: 'Ecosystem Rewards', value: 15, color: '#0EF34B' },
  { name: 'Marketing', value: 15, color: '#D946EF' },
  { name: 'Liquidity', value: 15, color: '#0FF5CE' },
  { name: 'Development & Research', value: 10, color: '#00AEFF' },
  { name: 'Team', value: 12, color: '#8B5CF6' },
  { name: 'DAO', value: 9, color: '#3B82F6' },
  { name: 'Private', value: 8, color: '#FFFFFF' },
  { name: 'Public', value: 5, color: '#F59E0B' },
  { name: 'Pre-Sale 2', value: 5, color: '#FF79C6' },
  { name: 'Pre-Sale 1', value: 3, color: '#10B981' },
  { name: 'Advisors', value: 2, color: '#F43F5E' },
  { name: 'KOL Round', value: 1, color: '#06B6D4' },
];
