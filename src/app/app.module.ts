import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/ui/footer/footer.component';
import { NavbarComponent } from './layout/ui/navbar/navbar.component';
import { HomeComponent } from './modules/home/home-page/home.component';
import { EstimationsComponent } from './modules/estimations/feature/estimations-page/estimations.component';
import { OverviewComponent } from './modules/overview/feature/overview-page/overview.component';
import { EstimatorsComponent } from './modules/estimators/feature/estimators-page/estimators.component';
import { EstimationsListComponent } from './modules/estimations/ui/estimations-list/estimations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    EstimationsComponent,
    OverviewComponent,
    EstimatorsComponent,
    EstimationsListComponent
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
