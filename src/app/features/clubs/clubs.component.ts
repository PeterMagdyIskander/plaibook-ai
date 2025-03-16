import { ClubService } from './../../core/services/club.service';
import { Component, computed, OnInit, signal } from '@angular/core';
import { Club } from '../../core/models/club.models';
import { ClubCardComponent } from '../../shared/club-card/club-card.component';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [ClubCardComponent, ReactiveFormsModule],

  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.scss',
})
export class ClubsComponent implements OnInit {
  clubForm!: FormGroup;
  isDialogVisible = false;

  constructor(private fb: FormBuilder, private clubService: ClubService) {}
  ngOnInit(): void {
    this.initForm();
    this.clubService.getAllClubs();
  }
  // Signal for the search query
  searchQuery = signal('');

  // Computed signal that automatically filters players based on the searchQuery
  filteredClubs = computed(() => {
    const query = this.searchQuery().toLowerCase();

    if (!query) {
      return this.clubService.clubs();
    }

    return this.clubService
      .clubs()
      .filter((club) => club.name.toLowerCase().includes(query));
  });

  // Method to update the search query
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }
  initForm(): void {
    this.clubForm = this.fb.group({
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
    if (this.clubForm.valid) {
      this.clubService.createClub({ name: this.clubForm.value.name });
      this.closeDialog();
      this.clubForm.reset();
    }
  }

  // Helper methods for validation
  shouldShowError(controlName: string, errorName: string): boolean {
    const control = this.clubForm.get(controlName);
    return control!.touched && control!.hasError(errorName);
  }
  handleDeleteItem(clubId: string) {
    this.clubService.deleteClub(clubId);
  }
}
