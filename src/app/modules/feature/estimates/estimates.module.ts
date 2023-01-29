import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { EstimatesComponent } from './estimates.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    EstimatesComponent
  ],
  imports: [
    CommonModule,
    EstimatesRoutingModule,
    CoreModule
  ]
})
export class EstimatesModule { }
