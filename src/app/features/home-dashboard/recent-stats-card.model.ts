export interface RecentData {
  title: string;
  subtitle: string;
  icon?: string;
  subIcon: string;
  value: number;
}

export interface RecentStatsCard {
  title: string;
  data: RecentData[];
}
