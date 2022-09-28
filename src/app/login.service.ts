import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email:any='';
  password:any=''
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
}
