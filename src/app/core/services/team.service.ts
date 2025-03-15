import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayersListResponse, TeamResponse, TeamsListResponse } from '../models/team.models';
// import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = `http://localhost:3000/api/teams`;

  constructor(private http: HttpClient) { }

  /**
   * Get all teams
   */
  getAllTeams(): Observable<TeamsListResponse> {
    return this.http.get<TeamsListResponse>(this.apiUrl);
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
  createTeam(teamData: { name: string; clubId: string }): Observable<TeamResponse> {
    return this.http.post<TeamResponse>(this.apiUrl, teamData);
  }

  /**
   * Update a team
   */
  updateTeam(teamId: string, updateData: { name: string }): Observable<TeamResponse> {
    return this.http.patch<TeamResponse>(`${this.apiUrl}/${teamId}`, updateData);
  }

  /**
   * Delete a team
   */
  deleteTeam(teamId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${teamId}`);
  }

  /**
   * Get all players for a team
   */
  getTeamPlayers(teamId: string): Observable<PlayersListResponse> {
    return this.http.get<PlayersListResponse>(`${this.apiUrl}/${teamId}/players`);
  }
}
