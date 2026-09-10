import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { seoKey: 'LANDING' },
    loadComponent: () => import('../pages/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'feature',
    data: { seoKey: 'FEATURE' },
    loadComponent: () => import('../pages/feature/feature').then((m) => m.Feature),
  },
  {
    path: 'about-pisi',
    data: { seoKey: 'ABOUT_PISI' },
    loadComponent: () => import('../pages/about-pisi/about-pisi').then((m) => m.AboutPisi),
  },
  {
    path: 'our-customers',
    data: { seoKey: 'OUR_CUSTOMERS' },
    loadComponent: () => import('../pages/our-customers/our-customers').then((m) => m.OurCustomers),
  },
  {
    path: 'strategy-implementation',
    data: { seoKey: 'STRATEGY_IMPLEMENTATION' },
    loadComponent: () =>
      import('../pages/strategy-implementation/strategy-implementation').then(
        (m) => m.StrategyImplementation,
      ),
  },
  {
    path: 'training-re-implementation',
    redirectTo: 'strategy-implementation',
    pathMatch: 'full',
  },
  {
    path: 'contact-us',
    data: { seoKey: 'CONTACT_US' },
    loadComponent: () => import('../pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'feature/:slug',
    data: { seoKey: 'FEATURE_DETAIL' },
    loadComponent: () => import('../pages/feature/feature').then((m) => m.Feature),
  },
];
