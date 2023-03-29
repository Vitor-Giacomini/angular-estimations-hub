import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './feature/products-page/products.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { ProductListComponent } from './ui/product-list/product-list.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
