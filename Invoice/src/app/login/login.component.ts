import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginformComponent {
 
  

    signinForm!:FormGroup;
loginForm: any;
   
    constructor(private fb:FormBuilder,private api:LoginService,private http:HttpClient,private routor:Router){}
    ngOnInit() {
      this.signinForm=this.fb.group({
        userName:['',[Validators.required]],
        Password:['',[Validators.required]],
      });
    }
  addsignin(data:any) {
    this.http.get<any>("  http://localhost:3000/login").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName === this.signinForm.value.userName && a.Password === this.signinForm.value.Password;
      })
     if (user) {
      localStorage.setItem('currentUser',JSON.stringify(user));
      
      console.log(user);
        alert("Successfully LogIn");
        this.routor.navigate(['/sale'])
    } else {
        alert("Invalid userName or password");
      }
     });
  }
  }