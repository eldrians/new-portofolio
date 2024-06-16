import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portofolio',
    loadChildren: () =>
      import('./features/portofolio/portofolio.routes').then(
        (r) => r.PORTOFOLIO_ROUTES
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'portofolio',
  },
  {
    path: '**',
    redirectTo: 'portofolio',
  },
];
