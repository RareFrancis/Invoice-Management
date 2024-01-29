import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit{

  companyForm!:FormGroup;

  constructor(private fb:FormBuilder , private http:HttpClient, private product:ProductService){}

  ngOnInit() {
    this.companyForm = this.fb.group({
      ProductType: ['', Validators.required],
      discription: ['', Validators.required],
    });
  }

  addcompany(data:any){
    this.http.post("http://localhost:3000/company",this.companyForm.value).subscribe(res=>{
      console.log(this.companyForm.value);
      alert("submitted successfully");
      this.companyForm.reset();
    })
  }


}
