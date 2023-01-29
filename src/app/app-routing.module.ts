import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../app/modules/feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('../app/modules/feature/overview/overview.module').then(m => m.OverviewModule)
  },
  {
    path: 'estimates',
    loadChildren: () => import('../app/modules/feature/estimates/estimates.module').then(m => m.EstimatesModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/modules/feature/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
