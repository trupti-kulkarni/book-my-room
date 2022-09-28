import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  city:string='';
  fromDate:Date=new Date();
  toDate:Date = new Date();
  req_rooms:number=1;
  hotel:string=''
  req_guest: number=1;
  constructor(private http:HttpClient) { }

  public get_details(){
    return {
      city:this.city,
      fromDate:this.fromDate,
      toDate:this.toDate,
      req_rooms:this.req_rooms
    }
  }

  public set_details(city:string,from_date:Date,toDate:Date,req_rooms:number,req_guest:number){
    this.city = city;
    this.fromDate= from_date;
    this.toDate=toDate;
    this.req_rooms=req_rooms;
    this.req_guest = req_guest

  }

  public find_hotels(){
   return this.http.get("http://localhost:3000/hotels?city="+this.city+"&rooms="+this.req_rooms)
  }

  public update_rooms(id:any,available_rooms:number){
    return this.http.put("http://localhost:3000/update_rooms",{
      "doc_id":id,
      "available_rooms":available_rooms
      
    },{
      responseType: 'text'
    })
  }

  public update_myBooking(email:any,hotel:any){
    return this.http.post("http://localhost:3000/mybooking",{
      "email":email,
      "hotel":hotel
      
    },{
      responseType: 'text'
    })
  }

  
}
