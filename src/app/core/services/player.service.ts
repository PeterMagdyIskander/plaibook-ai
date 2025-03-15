import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerResponse, PlayersListResponse, TransferResponse } from '../models/player.models';
// import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = `http://localhost:3000/api/players`;

  constructor(private http: HttpClient) { }

  /**
   * Get all players
   */
  getAllPlayers(): Observable<PlayersListResponse> {
    return this.http.get<PlayersListResponse>(this.apiUrl);
  }

  /**
   * Get player by ID
   */
  getPlayerById(playerId: string): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(`${this.apiUrl}/${playerId}`);
  }

  /**
   * Create a new player
   */
  createPlayer(playerData: {
    name: string;
    teamId: string;
    clubId: string;
    position?: string;
    age?: number;
  }): Observable<PlayerResponse> {
    return this.http.post<PlayerResponse>(this.apiUrl, playerData);
  }

  /**
   * Update a player
   */
  updatePlayer(
    playerId: string,
    updateData: {
      name?: string;
      position?: string;
      age?: number;
    }
  ): Observable<PlayerResponse> {
    return this.http.patch<PlayerResponse>(`${this.apiUrl}/${playerId}`, updateData);
  }

  /**
   * Delete a player
   */
  deletePlayer(playerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${playerId}`);
  }

  /**
   * Transfer a player to another team
   */
  transferPlayer(
    playerId: string,
    transferData: { teamId: string; clubId: string }
  ): Observable<TransferResponse> {
    return this.http.post<TransferResponse>(
      `${this.apiUrl}/${playerId}/transfer`,
      transferData
    );
  }
}
