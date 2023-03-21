import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeeComponent } from './components/homee/homee.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { TopDealsComponent } from './components/top-deals/top-deals.component';
import { TopDealsCategoryComponent } from './components/top-deals-category/top-deals-category.component';
import { TopDealsHeaderComponent } from './components/top-deals-header/top-deals-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeeComponent,
    MedicineHomeComponent,
    TopDealsComponent,
    TopDealsCategoryComponent,
    TopDealsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
