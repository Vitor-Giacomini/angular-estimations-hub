import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationsComponent } from './modules/estimations/feature/estimations-page/estimations.component';
import { EstimatorsComponent } from './modules/estimators/feature/estimators-page/estimators.component';
import { HomeComponent } from './modules/home/home-page/home.component';
import { OverviewComponent } from './modules/overview/feature/overview-page/overview.component';

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
    path: 'estimations',
    component: EstimationsComponent,
    loadChildren: () => import('./modules/estimations/estimations.module').then(m => m.EstimationsModule)
  },
  {
    path: 'estimators',
    component: EstimatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
