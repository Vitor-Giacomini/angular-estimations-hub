import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from 'src/app/layout/ui/navbar/navbar.component';
import { FooterComponent } from 'src/app/layout/ui/footer/footer.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
