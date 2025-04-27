import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/simulator-config/simulator-config.component').then(comp => comp.SimulatorConfigComponent),
  },
  { path: '**', redirectTo: '' },
];
