import { PlayerService } from './../../core/services/player.service';
import { Component, computed, OnInit, signal } from '@angular/core';
import { PlayerCardComponent } from '../../shared/player-card/player-card.component';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TeamService } from '../../core/services/team.service';
import { ClubService } from '../../core/services/club.service';
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

  constructor(
    private fb: FormBuilder,
    public teamService: TeamService,
    public clubService: ClubService,
    private playerService: PlayerService
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.teamService.getAllTeams();
    this.clubService.getAllClubs();
    this.playerService.getAllPlayers();
  }

  // Signal for the search query
  searchQuery = signal('');

  // Computed signal that automatically filters players based on the searchQuery
  filteredPlayers = computed(() => {
    const query = this.searchQuery().toLowerCase();

    if (!query) {
      return this.playerService.players();
    }

    return this.playerService
      .players()
      .filter((player) => player.name.toLowerCase().includes(query));
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
      clubId: ['', Validators.required],
      teamId: ['', Validators.required],
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
      const clubName = this.clubService
        .clubs()
        .find((club) => club.id === this.playerForm.value.clubId)?.name;
      const teamName = this.teamService
        .teams()
        .find((team) => team.id === this.playerForm.value.teamId)?.name;
      this.playerService.createPlayer({
        name: this.playerForm.value.name,
        teamId: this.playerForm.value.teamId,
        clubId: this.playerForm.value.clubId,
        position: this.playerForm.value.position,
        age: this.playerForm.value.age,
        team: teamName!,
        club: clubName!,
      });
      this.closeDialog();
      this.playerForm.reset();
    }
  }

  // Helper methods for validation
  shouldShowError(controlName: string, errorName: string): boolean {
    const control = this.playerForm.get(controlName);
    return control!.touched && control!.hasError(errorName);
  }
  handleDeleteItem(playerId: string) {
    this.playerService.deletePlayer(playerId);
  }
}
