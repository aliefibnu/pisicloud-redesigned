import { RenderMode, ServerRoute } from '@angular/ssr';
import { getAllFeatureSlugs } from '../data/features/features.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'feature/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => getAllFeatureSlugs().map((slug) => ({ slug })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
