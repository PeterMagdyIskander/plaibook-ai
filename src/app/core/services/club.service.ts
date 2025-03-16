import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Club,
  ClubResponse,
  ClubsListResponse,
  TeamResponse,
} from '../models/club.models';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private apiUrl = `http://localhost:3000/api/clubs`;

  loadingClubs = signal<boolean>(false);
  clubs = signal<Club[]>([]);

  constructor(private http: HttpClient) {}

  /**
   * Get all clubs
   */
  getAllClubs() {
    this.loadingClubs.set(true);
    this.http.get<ClubsListResponse>(this.apiUrl).subscribe({
      next: (res) => {
        this.clubs.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingClubs.set(false);
      },
    });
  }

  /**
   * Get club by ID
   */
  getClubById(clubId: string): Observable<ClubResponse> {
    return this.http.get<ClubResponse>(`${this.apiUrl}/${clubId}`);
  }

  /**
   * Create a new club
   */
  createClub(clubData: { name: string }) {
    this.loadingClubs.set(false);
    this.http.post<ClubResponse>(this.apiUrl, clubData).subscribe({
      next: (res) => {
        this.clubs.set([...this.clubs(), res.data]);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingClubs.set(false);
      },
    });
  }

  /**
   * Update a club
   */
  updateClub(
    clubId: string,
    updateData: { name: string }
  ): Observable<ClubResponse> {
    return this.http.patch<ClubResponse>(
      `${this.apiUrl}/${clubId}`,
      updateData
    );
  }

  /**
   * Delete a club
   */
  deleteClub(clubId: string) {
    this.loadingClubs.set(true);
    this.http.delete<void>(`${this.apiUrl}/${clubId}`).subscribe({
      next: () => {
        this.clubs.set(this.clubs().filter((club) => club.id != clubId));
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingClubs.set(false);
      },
    });
  }

  /**
   * Get all teams for a club
   */
  getClubTeams(clubId: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${this.apiUrl}/${clubId}/teams`);
  }
}
