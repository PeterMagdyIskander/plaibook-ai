import { Component, Input } from '@angular/core';
import { SessionDataCardComponent } from "../session-data-card/session-data-card.component";

@Component({
  selector: 'app-session-card',
  standalone: true,
  imports: [SessionDataCardComponent],
  templateUrl: './session-card.component.html',
  styleUrl: './session-card.component.scss'
})
export class SessionCardComponent {
  @Input() isUpcoming = true;
  @Input() item: any;
}
