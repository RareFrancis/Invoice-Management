import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  categoryForm!:FormGroup;

  constructor(private fb:FormBuilder , private http:HttpClient, private product:ProductService){}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      ProductTitle: ['', Validators.required],
      Discription: ['', Validators.required],
    });
  }

  addcategory(data:any){
    this.http.post("http://localhost:3000/category",this.categoryForm.value).subscribe(res=>{
      console.log(this.categoryForm.value);
      alert("submitted successfully");
      this.categoryForm.reset();
    })
  }

  resetForm() {
    this.categoryForm.reset();
  }

}
