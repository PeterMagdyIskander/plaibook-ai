import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Player,
  PlayerResponse,
  PlayersListResponse,
  TransferResponse,
} from '../models/player.models';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = `http://localhost:3000/api/players`;
  loadingPlayers = signal<boolean>(false);
  players = signal<Player[]>([]);
  constructor(private http: HttpClient) {}

  /**
   * Get all players
   */
  getAllPlayers() {
    this.loadingPlayers.set(true);
    this.http.get<PlayersListResponse>(this.apiUrl).subscribe({
      next: (res) => {
        this.players.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingPlayers.set(false);
      },
    });
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
    team: string;
    club: string;
  }) {
    this.loadingPlayers.set(true);
    this.http.post<PlayerResponse>(this.apiUrl, playerData).subscribe({
      next: (res) => {
        this.players.set([...this.players(), res.data]);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingPlayers.set(false);
      },
    });
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
    return this.http.patch<PlayerResponse>(
      `${this.apiUrl}/${playerId}`,
      updateData
    );
  }

  /**
   * Delete a player
   */
  deletePlayer(playerId: string) {
    this.loadingPlayers.set(true);
    return this.http.delete<void>(`${this.apiUrl}/${playerId}`).subscribe({
      next: () => {
        this.players.set(
          this.players().filter((player) => player.id != playerId)
        );
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loadingPlayers.set(false);
      },
    });
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
