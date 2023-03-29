import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimationsComponent } from './modules/estimations/feature/estimations-page/estimations.component';
import { HomeComponent } from './modules/home/home-page/home.component';
import { OverviewComponent } from './modules/overview/feature/overview-page/overview.component';
import { ProductsComponent } from './modules/products/feature/products-page/products.component';

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
    component: EstimationsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
