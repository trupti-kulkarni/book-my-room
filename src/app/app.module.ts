import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { ShowOptionsComponent } from './show-options/show-options.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchHotelComponent,
    MyCartComponent,
    MyBookingsComponent,
    HeaderComponent,
    ShowOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
