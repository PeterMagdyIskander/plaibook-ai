import { Component, Input } from '@angular/core';
import { RecentData } from '../../features/home-dashboard/recent-stats-card.model';

@Component({
  selector: 'app-recent-stats-data-card',
  standalone: true,
  imports: [],
  templateUrl: './recent-stats-data-card.component.html',
  styleUrl: './recent-stats-data-card.component.scss'
})
export class RecentStatsDataCardComponent {

  @Input() item!: RecentData;
}
