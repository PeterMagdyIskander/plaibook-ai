import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../features/players/player.model';
@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpClient) {}
  players = signal<Player[]>([]);

  AddPlayer(newPlayer: Player) {
    this.http
      .post('http://localhost:3000/api/players', {
        name: newPlayer.name,
        teamId: 'gHF7A4AJGSjGC5B1JzaJ',
        clubId: 'xRcQwryrN61XRcBLZSFa',
        position: newPlayer.position,
        age: newPlayer.age,
      })
      .subscribe({
        next: (data) => {
          alert('Added successfuly');
          this.getAllPlayers();
        },
      });
  }

  getAllPlayers() {
    this.http.get('http://localhost:3000/api/players').subscribe({
      next: (data:any) => {
         this.players.set(data.data.map((playerData:any)=>{
          const player:Player={
            name:playerData.name,
            age:playerData.age,
            team:"Youth",
            position:playerData.position,
            rating:0
          };
          return player;
         }));
      },
    });
  }
}
