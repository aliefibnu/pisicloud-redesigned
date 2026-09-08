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
    path: 'about-pisi',
    loadComponent: () => import('../pages/about-pisi/about-pisi').then((m) => m.AboutPisi),
  },
  {
    path: 'our-customers',
    loadComponent: () => import('../pages/our-customers/our-customers').then((m) => m.OurCustomers),
  },
  {
    path: 'strategy-implementation',
    loadComponent: () =>
      import('../pages/strategy-implementation/strategy-implementation').then(
        (m) => m.StrategyImplementation,
      ),
  },
  {
    path: 'feature/:slug',
    loadComponent: () => import('../pages/feature/feature').then((m) => m.Feature),
  },
];
