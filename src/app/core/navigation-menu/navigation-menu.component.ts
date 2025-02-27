import { Component } from '@angular/core';
import { Route } from './routes.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
  routes: Route[] = [
    {
      icon:'players-icon.svg',
      name: "Players",
      route: '/players'
    },
    {
      icon:'training-icon.svg',
      name: "Training",
      route: '/training'
    },
    {icon:'performance-icon.svg',
      name: "Performance",
      route: '/performance'
    },
    {icon:'formation-icon.svg',
      name: "Formation",
      route: '/formation'
    },
    {
      icon:'top-eleven-icon.svg',
      name: "Top 11",
      route: '/top-eleven'
    },
  ]
}
