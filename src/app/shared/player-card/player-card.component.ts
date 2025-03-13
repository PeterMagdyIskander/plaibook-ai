import { Player } from '../../features/players/player.model';
import { Component, Input } from '@angular/core';
import { IconGeneratorPipe } from "./icon-generator.pipe";
@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [IconGeneratorPipe],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  @Input() item!: Player;
}
