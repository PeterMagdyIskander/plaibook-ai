import { Component, Input } from '@angular/core';
import { Club } from '../../core/models/club.models';
import { IconGeneratorPipe } from '../../core/pipes/icon-generator.pipe';

@Component({
  selector: 'app-club-card',
  standalone: true,
  imports: [IconGeneratorPipe],
  templateUrl: './club-card.component.html',
  styleUrl: './club-card.component.scss',
})
export class ClubCardComponent {
  @Input() item!: Club;
}
