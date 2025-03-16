import { Player } from '../../core/models/player.models';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconGeneratorPipe } from '../../core/pipes/icon-generator.pipe';
@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [IconGeneratorPipe],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  @Input() item!: Player;
  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();
  handleDelete() {
    this.deleteItem.emit(this.item.id);
  }
}
