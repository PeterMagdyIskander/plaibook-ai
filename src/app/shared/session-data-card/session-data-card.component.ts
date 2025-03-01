import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-data-card',
  standalone: true,
  imports: [],
  templateUrl: './session-data-card.component.html',
  styleUrl: './session-data-card.component.scss',
})
export class SessionDataCardComponent {
  @Input() isUpcoming = true;
  @Input() item: any;
}
