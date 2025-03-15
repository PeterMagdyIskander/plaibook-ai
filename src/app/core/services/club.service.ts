import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClubResponse, ClubsListResponse, TeamResponse } from '../models/club.models';
// import { environment } from '../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private apiUrl = `http://localhost:3000/api/clubs`;

  constructor(private http: HttpClient) { }

  /**
   * Get all clubs
   */
  getAllClubs(): Observable<ClubsListResponse> {
    return this.http.get<ClubsListResponse>(this.apiUrl);
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
  createClub(clubData: { name: string }): Observable<ClubResponse> {
    return this.http.post<ClubResponse>(this.apiUrl, clubData);
  }

  /**
   * Update a club
   */
  updateClub(clubId: string, updateData: { name: string }): Observable<ClubResponse> {
    return this.http.patch<ClubResponse>(`${this.apiUrl}/${clubId}`, updateData);
  }

  /**
   * Delete a club
   */
  deleteClub(clubId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${clubId}`);
  }

  /**
   * Get all teams for a club
   */
  getClubTeams(clubId: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${this.apiUrl}/${clubId}/teams`);
  }
}
