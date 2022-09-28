import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 public email:any='';
  public password:any=''
  constructor(private http:HttpClient) { }

  public login(email:string, password:string){
    this.email = email;
    this.password = password
   return  this.http.post("http://localhost:3000/login",{
      email:email,
      password:password
    },
    {responseType:'text'})
  }

  public fetchBookings(){
    console.log("this email is--",this.email);
    
    return this.http.get("http://localhost:3000/myBookings?email="+this.email)
  }
}
