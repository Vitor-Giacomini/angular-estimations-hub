import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
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
