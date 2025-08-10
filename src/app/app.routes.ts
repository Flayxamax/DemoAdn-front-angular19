import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'adn-stats',
    pathMatch: 'full',
  },
  {
    path: 'adn-stats',
    loadComponent: () => import('./adn/features/adn-stats/adn-stats.component'),
  },
  {
    path: '**',
    redirectTo: 'adn-stats',
  },
];
