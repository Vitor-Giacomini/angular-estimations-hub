import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/feature/home-page/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/ui/footer/footer.component';
import { NavbarComponent } from './layout/ui/navbar/navbar.component';
import { EstimatesComponent } from './modules/feature/estimates-page/estimates.component';
import { DashboardComponent } from './modules/feature/dashboard-page/dashboard.component';
import { OverviewComponent } from './modules/feature/overview-page/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    EstimatesComponent,
    DashboardComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
