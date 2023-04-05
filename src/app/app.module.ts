import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/ui/footer/footer.component';
import { NavbarComponent } from './layout/ui/navbar/navbar.component';
import { HomeComponent } from './modules/home/home-page/home.component';
import { EstimationsComponent } from './modules/estimations/feature/estimations-page/estimations.component';
import { OverviewComponent } from './modules/overview/feature/overview-page/overview.component';
import { EstimationsListComponent } from './modules/estimations/ui/estimations-list/estimations-list.component';
import { ProductsComponent } from './modules/products/feature/products-page/products.component';
import { ProductListComponent } from './modules/products/ui/product-list/product-list.component';
import { ProductCardComponent } from './modules/products/ui/product-card/product-card.component';
import { NewEstimationComponent } from './modules/estimations/feature/new-estimation-page/new-estimation.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    EstimationsComponent,
    OverviewComponent,
    EstimationsListComponent,
    ProductsComponent,
    ProductListComponent,
    ProductCardComponent,
    NewEstimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
