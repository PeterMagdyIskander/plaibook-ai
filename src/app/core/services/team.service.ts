import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PlayersListResponse,
  Team,
  TeamResponse,
  TeamsListResponse,
} from '../models/team.models';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = `http://localhost:3000/api/teams`;
  loadingTeams = signal<boolean>(false);
  teams = signal<Team[]>([]);
  constructor(private http: HttpClient) {}

  /**
   * Get all teams
   */
  getAllTeams() {
    this.loadingTeams.set(true);
    this.http.get<TeamsListResponse>(this.apiUrl).subscribe({
      next: (res) => {
        this.teams.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingTeams.set(false);
      },
    });
  }

  /**
   * Get team by ID
   */
  getTeamById(teamId: string): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(`${this.apiUrl}/${teamId}`);
  }

  /**
   * Create a new team
   */
  createTeam(teamData: { name: string; clubId: string }) {
    return this.http.post<TeamResponse>(this.apiUrl, teamData).subscribe({
      next: (res) => {
        this.teams.set([...this.teams(), res.data]);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingTeams.set(false);
      },
    });
  }

  /**
   * Update a team
   */
  updateTeam(
    teamId: string,
    updateData: { name: string }
  ): Observable<TeamResponse> {
    return this.http.patch<TeamResponse>(
      `${this.apiUrl}/${teamId}`,
      updateData
    );
  }

  /**
   * Delete a team
   */
  deleteTeam(teamId: string) {
    this.http.delete<void>(`${this.apiUrl}/${teamId}`).subscribe({
      next: (res) => {
        this.teams.set(this.teams().filter((team) => team.id != teamId));
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingTeams.set(false);
      },
    });
  }

  /**
   * Get all players for a team
   */
  getTeamPlayers(teamId: string): Observable<PlayersListResponse> {
    return this.http.get<PlayersListResponse>(
      `${this.apiUrl}/${teamId}/players`
    );
  }
}
