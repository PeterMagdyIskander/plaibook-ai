import { Component } from '@angular/core';
import { SessionCardComponent } from '../../shared/session-card/session-card.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [SessionCardComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent {
  isDialogVisible = false;
  upcomingSessions: any = {
    title: 'Upcoming Sessions',
    data: [
      {
        title: 'Technical Training',
        from: '9:00 AM',
        to: '11:00 AM',
        date: '01/03/2025',
        team: 'Youth Team',
      },
      {
        title: 'Technical Training',
        from: '9:00 AM',
        to: '11:00 AM',
        date: '01/03/2025',
        team: 'Youth Team',
      },
      {
        title: 'Technical Training',
        from: '9:00 AM',
        to: '11:00 AM',
        date: '01/03/2025',
        team: 'Youth Team',
      },
    ],
  };
  RecentSessions: any = {
    title: 'Recent Sessions',
    data: [
      {
        title: 'Tactical Training',
        from: '9:00 AM',
        to: '11:00 AM',
        date: '28/02/2025',
        team: 'Youth Team',
      },
      {
        title: 'Tactical Training',
        from: '9:00 AM',
        to: '11:00 AM',
        date: '28/02/2025',
        team: 'Youth Team',
      },
      {
        title: 'Tactical Training',
        from: '9:00 AM',
        to: '11:00 AM',
        date: '28/02/2025',
        team: 'Youth Team',
      },
    ],
  };
  openDialog(): void {
    this.isDialogVisible = true;
  }

  closeDialog(): void {
    this.isDialogVisible = false;
  }
}
