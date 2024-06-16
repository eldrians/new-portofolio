import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';

export const routes: Routes = [
  {
    path: 'portofolio',
    component: DefaultLayoutComponent,
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
