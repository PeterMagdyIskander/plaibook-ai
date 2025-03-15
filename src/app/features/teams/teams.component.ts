import { Component, computed, OnInit, signal } from '@angular/core';
import { Team } from '../../core/models/team.models';

import { TeamCardComponent } from '../../shared/team-card/team-card.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [TeamCardComponent, ReactiveFormsModule],

  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss',
})
export class TeamsComponent implements OnInit {
  teamForm!: FormGroup;
  isDialogVisible = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  teams = signal<Team[]>([
    {
      id: 'FCB',
      name: 'FCB',
      clubId: 'FCB',
      createdAt: '2025-03-15',
      updatedAt: '2025-03-15',
    },
  ]);
  // Signal for the search query
  searchQuery = signal('');

  // Computed signal that automatically filters players based on the searchQuery
  filteredTeams = computed(() => {
    const query = this.searchQuery().toLowerCase();

    if (!query) {
      return this.teams();
    }

    return this.teams().filter((team) =>
      team.name.toLowerCase().includes(query)
    );
  });

  // Method to update the search query
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
  initForm(): void {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  openDialog(): void {
    this.isDialogVisible = true;
  }

  closeDialog(): void {
    this.isDialogVisible = false;
  }

  onSubmit(): void {
    if (this.teamForm.valid) {
      // const newPlayer: Player = {
      //   name: this.teamForm.value.name,
      //   age: this.teamForm.value.age,
      //   team: this.teamForm.value.team,
      //   position: this.teamForm.value.position,
      //   rating: 0,
      // };

      // this.players.set([...this.players(), newPlayer]);
      // this.closeDialog();
      // this.teamForm.reset();
    }
  }

  // Helper methods for validation
  shouldShowError(controlName: string, errorName: string): boolean {
    const control = this.teamForm.get(controlName);
    return control!.touched && control!.hasError(errorName);
  }
}
