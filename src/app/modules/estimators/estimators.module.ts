import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstimatorsRoutingModule } from './estimators-routing.module';
import { EstimatorsComponent } from './feature/estimators-page/estimators.component';
import { NavbarComponent } from 'src/app/layout/ui/navbar/navbar.component';
import { FooterComponent } from 'src/app/layout/ui/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    EstimatorsRoutingModule
  ]
})
export class EstimatorsModule { }
