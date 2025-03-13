import { Component, Input } from '@angular/core';
import { RecentStatsCard } from '../../features/home-dashboard/recent-stats-card.model';
import { RecentStatsDataCardComponent } from "../recent-stats-data-card/recent-stats-data-card.component";

@Component({
  selector: 'app-recent-stats-card',
  standalone: true,
  imports: [RecentStatsDataCardComponent],
  templateUrl: './recent-stats-card.component.html',
  styleUrl: './recent-stats-card.component.scss',
})
export class RecentStatsCardComponent {
  @Input() item!: RecentStatsCard;
}
