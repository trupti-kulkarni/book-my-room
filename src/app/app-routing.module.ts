import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

const routes: Routes = [
  {path:'bookmyroom',component : MyBookingsComponent},
  {path:'login',component : LoginComponent},
  {path:'search',component : SearchHotelComponent},
  {path:'mybookings',component : MyCartComponent },
  {path:'', redirectTo:'/login',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
