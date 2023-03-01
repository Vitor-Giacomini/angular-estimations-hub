import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { EstimationsListComponent } from './estimations-list/estimations-list.component';

const routes: Routes = [{path: '', component: HomeComponent}]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureModule { }
