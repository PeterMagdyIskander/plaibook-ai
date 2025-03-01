import { Component, computed, OnInit, signal } from '@angular/core';
import { Player } from './player.model';
import { PlayerCardComponent } from '../../shared/player-card/player-card.component';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [PlayerCardComponent, ReactiveFormsModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent implements OnInit {
  playerForm!: FormGroup;
  isDialogVisible = false;
  positions: string[] = [
    'Goalkeeper',
    'Rigth Back',
    'Center Back',
    'Left Back',
    'Defensive Midfielder',
    'Central Midfielder',
    'Attacking Midfielder',
    'Left Winger',
    'Right Winger',
    'Striker',
  ];
  teams: string[] = ['Youth', 'Under 23', "Men's", "Women's"];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }
  players = signal<Player[]>([
    {
      name: 'John Doe #1',
      age: 18,
      rating: 4.5,
      team: 'Youth Team',
      position: 'Striker',
    },
    {
      name: 'John Doe #2',
      age: 18,
      rating: 4.5,
      team: 'Youth Team',
      position: 'Striker',
    },
    {
      name: 'John Doe #3',
      age: 18,
      rating: 4.5,
      team: 'Youth Team',
      position: 'Striker',
    },
    {
      name: 'John Doe #4',
      age: 18,
      rating: 4.5,
      team: 'Youth Team',
      position: 'Striker',
    },
    {
      name: 'John Doe #5',
      age: 18,
      rating: 4.5,
      team: 'Youth Team',
      position: 'Striker',
    },
    {
      name: 'John Doe #6',
      age: 18,
      rating: 4.5,
      team: 'Youth Team',
      position: 'Striker',
    },
  ]);
  // Signal for the search query
  searchQuery = signal('');

  // Computed signal that automatically filters players based on the searchQuery
  filteredPlayers = computed(() => {
    const query = this.searchQuery().toLowerCase();

    if (!query) {
      return this.players();
    }

    return this.players().filter((player) =>
      player.name.toLowerCase().includes(query)
    );
  });

  // Method to update the search query
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
  initForm(): void {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16), Validators.max(60)]],
      team: ['', Validators.required],
    });
  }

  openDialog(): void {
    this.isDialogVisible = true;
  }

  closeDialog(): void {
    this.isDialogVisible = false;
  }

  onSubmit(): void {
    if (this.playerForm.valid) {
      const newPlayer: Player = {
        name: this.playerForm.value.name,
        age: this.playerForm.value.age,
        team: this.playerForm.value.team,
        position: this.playerForm.value.position,
        rating: 0,
      };

      this.players.set([...this.players(), newPlayer]);
      this.closeDialog();
      this.playerForm.reset();
    }
  }

  // Helper methods for validation
  shouldShowError(controlName: string, errorName: string): boolean {
    const control = this.playerForm.get(controlName);
    return control!.touched && control!.hasError(errorName);
  }
}
