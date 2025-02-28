import { Component, Input } from '@angular/core';
import { StatsCard } from '../../features/home-dashboard/stats-card.model';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
})
export class StatsCardComponent {
  @Input() item!: StatsCard;
}
