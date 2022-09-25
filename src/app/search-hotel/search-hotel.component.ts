import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.scss']
})
export class SearchHotelComponent implements OnInit {
  city:string='';
  fromDate:Date=new Date();
  toDate:Date = new Date();
  req_rooms:number=1;
  rooms=[1,2,3,4,5];
  people=[1,2,3,4,5]
  hotels: any[]=[];
  constructor(private bookService:BookingService) {

   }

  ngOnInit(): void {
    const details = this.bookService.get_details();
    this.city = details.city;
    this.fromDate = details.fromDate;
    this.toDate = details.toDate;
    this.req_rooms = details.req_rooms;
    this.search();

  }

  search(){
    this.bookService.set_details(this.city,this.fromDate,this.toDate,this.req_rooms);
    this.bookService.find_hotels().subscribe((hotels:any)=>{
      console.log("response we got is--",hotels);
      this.hotels= hotels
    
    },
    (err)=>{
      console.log("error is--",err);
      
    })
   

  }

  book(){
    
  }

}
