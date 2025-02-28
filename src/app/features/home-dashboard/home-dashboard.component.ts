import { Component } from '@angular/core';
import { StatsCardComponent } from '../../shared/stats-card/stats-card.component';
import { StatsCard } from './stats-card.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-dashboard',
  standalone: true,
  imports: [StatsCardComponent,RouterModule],
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.scss',
})
export class HomeDashboardComponent {
  statsCardData: StatsCard[] = [
    {
      icon:'players-icon.svg',
      iconBackgroundColor:'#10B981',
      title:'Total Players',
      value:42,
      route:'/players'
    },
    {
      icon:'training-icon.svg',
      iconBackgroundColor:'#43D399',
      title:'Training Sessions',
      value:12,
      route:'/training'
    },
    {
      icon:'top-performers-icon.svg',
      iconBackgroundColor:'#F59E0B',
      title:'Top Performers',
      value:8,
      route:'/performance'
    },
    {
      icon:'top-eleven-icon.svg',
      iconBackgroundColor:'#475569',
      title:'Team Rating',
      value:4.5,
      route:'/top-eleven'
    },
  ];
}
