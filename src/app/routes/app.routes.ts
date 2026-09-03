import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'feature',
    loadComponent: () => import('../pages/feature/feature').then((m) => m.Feature),
  },
  {
    path: 'feature/:slug',
    loadComponent: () => import('../pages/feature/feature').then((m) => m.Feature),
  },
];
