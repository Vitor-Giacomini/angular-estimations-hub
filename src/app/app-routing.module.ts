import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/feature/dashboard-page/dashboard.component';
import { EstimatesComponent } from './modules/feature/estimates-page/estimates.component';
import { HomeComponent } from './modules/feature/home-page/home.component';
import { OverviewComponent } from './modules/feature/overview-page/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'estimates',
    component: EstimatesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
