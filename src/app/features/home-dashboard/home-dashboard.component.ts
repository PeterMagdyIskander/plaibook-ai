import { Component } from '@angular/core';
import { StatsCardComponent } from '../../shared/stats-card/stats-card.component';
import { StatsCard } from './stats-card.model';
import { RouterModule } from '@angular/router';
import { RecentStatsCard } from './recent-stats-card.model';
import { RecentStatsCardComponent } from '../../shared/recent-stats-card/recent-stats-card.component';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [StatsCardComponent, RouterModule, RecentStatsCardComponent],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss',
})
export class HomeDashboardComponent {
  statsCardData: StatsCard[] = [
    {
      icon: 'players-icon.svg',
      iconBackgroundColor: '#10B981',
      title: 'Total Players',
      value: 42,
      route: '/players',
    },
    {
      icon: 'training-icon.svg',
      iconBackgroundColor: '#43D399',
      title: 'Training Sessions',
      value: 12,
      route: '/training',
    },
    {
      icon: 'top-performers-icon.svg',
      iconBackgroundColor: '#F59E0B',
      title: 'Top Performers',
      value: 8,
      route: '/performance',
    },
    {
      icon: 'top-eleven-icon.svg',
      iconBackgroundColor: '#475569',
      title: 'Team Rating',
      value: 4.5,
      route: '/top-eleven',
    },
  ];
  recentStatsData: RecentStatsCard[] = [
    {
      title: 'Recent Training Sessions',
      data: [
        {
          title: 'Technical Training #1',
          subtitle: 'Tomorrow at 9:00 AM',
          subIcon: 'training-icon.svg',
          value: 0,
        },
        {
          title: 'Technical Training #2',
          subtitle: 'Tomorrow at 9:00 AM',
          subIcon: 'training-icon.svg',
          value: 0,
        },
        {
          title: 'Technical Training #3',
          subtitle: 'Tomorrow at 9:00 AM',
          subIcon: 'training-icon.svg',
          value: 0,
        },
      ],
    },
    {
      title: 'Top Performers',
      data: [
        {
          title: 'Player #1',
          subtitle: 'Forward',
          subIcon: 'top-performers-icon.svg',
          icon: 'players-icon.svg',
          value: 4.8,
        },
        {
          title: 'Player #2',
          subtitle: 'Forward',
          subIcon: 'top-performers-icon.svg',
          icon: 'players-icon.svg',
          value: 4.7,
        },
        {
          title: 'Player #3',
          subtitle: 'Forward',
          subIcon: 'top-performers-icon.svg',
          icon: 'players-icon.svg',
          value: 4.6,
        },
      ],
    },
  ];
}
