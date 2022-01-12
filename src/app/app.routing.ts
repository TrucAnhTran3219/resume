import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' },
  {
    path: 'resume', loadChildren: () => import('./app.module').then(m => m.AppModule),
  }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);