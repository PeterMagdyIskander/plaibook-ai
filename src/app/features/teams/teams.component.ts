import { Component, computed, OnInit, signal } from '@angular/core';
import { Team } from '../../core/models/team.models';

import { TeamCardComponent } from '../../shared/team-card/team-card.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TeamService } from '../../core/services/team.service';
import { ClubService } from '../../core/services/club.service';
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

  constructor(
    private fb: FormBuilder,
    private teamService: TeamService,
    public clubService: ClubService
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.teamService.getAllTeams();
    this.clubService.getAllClubs();
  }
  // Signal for the search query
  searchQuery = signal('');

  // Computed signal that automatically filters players based on the searchQuery
  filteredTeams = computed(() => {
    const query = this.searchQuery().toLowerCase();

    if (!query) {
      return this.teamService.teams();
    }

    return this.teamService
      .teams()
      .filter((team) => team.name.toLowerCase().includes(query));
  });

  // Method to update the search query
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
  initForm(): void {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
      clubId: ['', Validators.required],
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
      this.teamService.createTeam({
        name: this.teamForm.value.name,
        clubId: this.teamForm.value.clubId,
      });
      this.closeDialog();
      this.teamForm.reset();
    }
  }

  // Helper methods for validation
  shouldShowError(controlName: string, errorName: string): boolean {
    const control = this.teamForm.get(controlName);
    return control!.touched && control!.hasError(errorName);
  }

  handleDeleteItem(teamId: string) {
    this.teamService.deleteTeam(teamId);
  }
}
