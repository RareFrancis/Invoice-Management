import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  productForm!:FormGroup;
  material:any;

  constructor(private fb:FormBuilder, private http:HttpClient, private product:ProductService){}


  ngOnInit() {
    this.productForm = this.fb.group({
      ProductType: ['', Validators.required],
      ProductTitle: ['', Validators.required],
      SelectCompany: ['', Validators.required],
      ExpiryDate: ['', Validators.required],
      ProductCode: ['', Validators.required],
      TotalStock: ['', Validators.required],
      CostItem: ['', Validators.required],
      manufacturedate: ['', Validators.required],
      discription: ['', Validators.required],
    });
  }
  

  addproduct(data:any){
    this.material = this.productForm.value;
    var currentDate = new Date();
    this.material["product_id"] = "br"+ currentDate.getTime()

    this.http.post("http://localhost:3000/posts",this.material).subscribe(res=>{
      console.log(this.productForm.value);
      alert("submitted successfully");
      this.productForm.reset();
    })
  }
}
