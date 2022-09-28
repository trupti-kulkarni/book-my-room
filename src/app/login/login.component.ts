import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';

  constructor(
    private router:Router,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("login form email is--",this.loginForm.get("email").value);
    
    this.loginService.login(this.loginForm.get("email").value,this.loginForm.get("password").value).subscribe((resp)=>{
      console.log("resp got form from login",resp,resp.length);
      if(resp.length){
        localStorage.setItem('user',this.loginForm.value)
      this.router.navigate(['/bookmyroom'])
      }
     else{
      console.log("wrong username or password!");
      
     }
      
    })
   
  }
}