import { Routes } from '@angular/router';
import { PlayersComponent } from './features/players/players.component';
import { TopElevenComponent } from './features/top-eleven/top-eleven.component';
import { FormationComponent } from './features/formation/formation.component';
import { PerformanceComponent } from './features/performance/performance.component';
import { TrainingComponent } from './features/training/training.component';

export const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'top-eleven', component: TopElevenComponent },
];
