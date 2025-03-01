import { Component, computed, signal } from '@angular/core';
import { Player } from './player.model';
import { PlayerCardComponent } from '../../shared/player-card/player-card.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [PlayerCardComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent {
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
}
