import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconGeneratorPipe } from '../../core/pipes/icon-generator.pipe';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [IconGeneratorPipe],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.scss',
})
export class RoleCardComponent {
  @Input() item!: any;
  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();
  handleDelete() {
    this.deleteItem.emit(this.item.id);
  }
}
