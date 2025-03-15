import { Component, Input } from '@angular/core';
import { Team } from '../../core/models/team.models';

import { IconGeneratorPipe } from '../../core/pipes/icon-generator.pipe';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [IconGeneratorPipe],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
  @Input() item!:Team;
}
