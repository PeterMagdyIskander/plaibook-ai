import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player } from './player.model';
import { Formation } from './formation.model';
@Component({
  selector: 'app-formation-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formation-board.component.html',
  styleUrl: './formation-board.component.scss'
})
export class FormationBoardComponent {
  availableFormations: string[] = ['4-4-2', '4-3-3', '3-5-2', '4-2-3-1'];
  selectedFormation: string = '4-3-3'; // Default formation
  players: Player[] = [];

  formations: { [key: string]: Formation } = {
    '4-4-2': {
      name: '4-4-2',
      players: [
        { position: 'GK', x: 50, y: 90 },
        { position: 'LB', x: 20, y: 75 },
        { position: 'CB', x: 35, y: 75 },
        { position: 'CB', x: 65, y: 75 },
        { position: 'RB', x: 80, y: 75 },
        { position: 'LM', x: 20, y: 55 },
        { position: 'CM', x: 40, y: 55 },
        { position: 'CM', x: 60, y: 55 },
        { position: 'RM', x: 80, y: 55 },
        { position: 'ST', x: 35, y: 30 },
        { position: 'ST', x: 65, y: 30 }
      ]
    },
    '4-3-3': {
      name: '4-3-3',
      players: [
        { position: 'GK', x: 50, y: 90 },
        { position: 'LB', x: 20, y: 75 },
        { position: 'CB', x: 35, y: 75 },
        { position: 'CB', x: 65, y: 75 },
        { position: 'RB', x: 80, y: 75 },
        { position: 'CM', x: 35, y: 55 },
        { position: 'CM', x: 50, y: 55 },
        { position: 'CM', x: 65, y: 55 },
        { position: 'LW', x: 20, y: 30 },
        { position: 'ST', x: 50, y: 25 },
        { position: 'RW', x: 80, y: 30 }
      ]
    },
    '3-5-2': {
      name: '3-5-2',
      players: [
        { position: 'GK', x: 50, y: 90 },
        { position: 'CB', x: 30, y: 75 },
        { position: 'CB', x: 50, y: 75 },
        { position: 'CB', x: 70, y: 75 },
        { position: 'LM', x: 15, y: 60 },
        { position: 'CM', x: 35, y: 55 },
        { position: 'CM', x: 50, y: 50 },
        { position: 'CM', x: 65, y: 55 },
        { position: 'RM', x: 85, y: 60 },
        { position: 'ST', x: 40, y: 30 },
        { position: 'ST', x: 60, y: 30 }
      ]
    },
    '4-2-3-1': {
      name: '4-2-3-1',
      players: [
        { position: 'GK', x: 50, y: 90 },
        { position: 'LB', x: 20, y: 75 },
        { position: 'CB', x: 35, y: 75 },
        { position: 'CB', x: 65, y: 75 },
        { position: 'RB', x: 80, y: 75 },
        { position: 'CM', x: 40, y: 60 },
        { position: 'CM', x: 60, y: 60 },
        { position: 'LM', x: 25, y: 45 },
        { position: 'CAM', x: 50, y: 40 },
        { position: 'RM', x: 75, y: 45 },
        { position: 'ST', x: 50, y: 25 }
      ]
    }
  };

  constructor() {
    this.onFormationChange();
  }

  onFormationChange(): void {
    // Update players positions based on selected formation
    const formation = this.formations[this.selectedFormation];
    if (formation) {
      this.players = [...formation.players];
    }
  }
}
