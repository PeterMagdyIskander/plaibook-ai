import { Routes } from '@angular/router';
import { PlayersComponent } from './features/players/players.component';
import { TopElevenComponent } from './features/top-eleven/top-eleven.component';
import { FormationComponent } from './features/formation/formation.component';
import { PerformanceComponent } from './features/performance/performance.component';
import { TrainingComponent } from './features/training/training.component';
import { LoginComponent } from './features/login/login.component';
import { HomeDashboardComponent } from './features/home-dashboard/home-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeDashboardComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'top-eleven', component: TopElevenComponent },
  { path: 'login', component: LoginComponent },
];
