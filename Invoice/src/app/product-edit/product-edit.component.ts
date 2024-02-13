import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
  productEditForm!:FormGroup;
  users: any[] = []; 
  employee:any;
  dataid:any;

  constructor(private fb:FormBuilder,private product:ProductService,private http:HttpClient,private router:Router,private activatedroute: ActivatedRoute,){

  this.productEditForm=this.fb.group({
    ProductTitle: '',
    ProductCode: '',
    TitalStock: '',
    discription: '',
});

}

ngOnInit():void {

this.activatedroute.paramMap.subscribe((param:Params)=>{
  this.dataid=param['get']("id");
  console.log("data id is",this.dataid);
})
this.product.fetchData(this.dataid).subscribe((data:any)=>{
  this.employee=data;
  console.log(this.employee);
this.productEditForm.setValue({
  ProductTitle:this.employee.ProductTitle,
    ProductCode:this.employee.ProductCode,
    TitalStock:this.employee.TitalStock,
    discription:this.employee.discription,
})
})
}


addEdit(){
  const productdata=this.productEditForm.value
  this.product.updateemployee(this.dataid,productdata).subscribe((res)=>{
    this.router.navigate(["/product-report"]);
    console.log(res);
    alert("Updated Successfully")
  })
}
}


