import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  options=["Book My Room","My Bookings"];
  rooms =[1,2,3,4,5];

  people= [1,2,3,4,5];

  destination: string=''

  fromDate:Date = new Date();

  toDate:Date = new Date();
 
  req_rooms:number=1;
  selectedOption:string="Book My Room"

  constructor(private http:HttpClient, private router:Router,private bookSErvice:BookingService) { }

  ngOnInit(): void {

    this.toDate.setDate(this.fromDate.getDate() + 1);
  }

  search(){
  
    this.router.navigateByUrl('/search')
  }

  optionClicked(option:string){
    this.selectedOption = option
  }
   
     
  }




export interface Tile {
  color: string;
  cols: number;
  rows: number;
 img: HTMLElement;
}
