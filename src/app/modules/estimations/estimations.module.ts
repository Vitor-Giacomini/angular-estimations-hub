import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimationsRoutingModule } from './estimations-routing.module';
import { EstimationsListComponent } from './ui/estimations-list/estimations-list.component';
import { NavbarComponent } from 'src/app/layout/ui/navbar/navbar.component';
import { FooterComponent } from 'src/app/layout/ui/footer/footer.component';
import { NewEstimationComponent } from './feature/new-estimation-page/new-estimation.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstimationsRoutingModule
  ]
})
export class EstimationsModule { }
