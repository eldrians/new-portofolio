import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";

export const PORTOFOLIO_ROUTES: Routes = [
    {
        path: 'home', 
        component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
]