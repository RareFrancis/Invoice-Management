import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phoneNumber = control.value;
    const isNumeric = /^\d+$/.test(phoneNumber);

    if (!isNumeric) {
      return { invalidPhoneNumber: true };
    }

    return null;
  };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private api: LoginService, private http: HttpClient, private router: Router) { }
  ngOnInit() {
    this.signupForm = this.fb.group({

      
      
      phoneNumber:['', [Validators.required, Validators.maxLength(10), phoneNumberValidator(), Validators.pattern('^[0-9]*$')]],
      email:['', [Validators.required, Validators.pattern("[a-z]+[@]+[a-z]+[.]+[a-z]+")]],
      userName:['', [Validators.required]],
      Password:['', [Validators.required]],
    });

  }

  addSignup(data: any) {
    this.http.post<any>("http://localhost:3000/login", this.signupForm.value).subscribe(res => {
      console.log(this.signupForm.value)
      alert("successfully submitted");
      this.router.navigate(['/loginform'])
    });
  }
}