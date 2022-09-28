import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  bookings :any[]=[];
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.fetchBookings().subscribe((res:any)=>{
      this.bookings = res;
      console.log("bookings are--",this.bookings);
      
    })
  }

}
