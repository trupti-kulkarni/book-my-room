import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  rooms =[1,2,3,4,5]
  people= [1,2,3,4,5]
  // tiles: Tile[] = [
  //   {img: '<img></img>', cols: 1, rows: 1, color: 'lightblue'},
  //   {img: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  //   {img: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    
   
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
 img: HTMLElement;
}
