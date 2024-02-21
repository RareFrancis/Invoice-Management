import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  saleForm!:FormGroup
  customerData!:any
  saleFormData :any
  saleDate:any
  productList:any
  orderId: any;
  orderProducts: any;
  productAdd:any;
  allData:any
  totalCost: any;
  allTotalCost: any;
  totalAmount: any;
  orderQty!: Object;
  maniProduct: any;
  selectProduct: any;
  constructor(private fb: FormBuilder,private http:HttpClient){
    this.saleForm = this.fb.group({
      cName: ['', [Validators.required]],
      cMobile: ['', [Validators.required]]
  })

  this.productAdd = this.fb.group({
    product_id: [''],
    qty: ['']
})
  }
  ngOnInit() {
    this.getProductData();
    
  }
  isViewDetails:boolean = false;
  
  isSellReport:boolean = false;
  sellStart() {
    console.log(this.saleForm.value);
    var currentDate = new Date();
     this.saleDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()} `;
    console.log(this.saleDate);
    
    
    this.saleFormData = this.saleForm.value
    this.saleFormData["date"] = this.saleDate ;
    this.saleFormData["products"] = [];
    this.saleFormData["order_id"] = "or"+ currentDate.getTime() ;

    
    console.log(this.saleFormData);
    
    this.http.post("http://localhost:3000/customerDetailes",this.saleFormData).subscribe((res) => {
      this.isSellReport = true;

      this.customerData = [res];
      console.log(this.customerData);
      this.orderId = this.customerData[0].id;
    
      
    }) 
    
  
  }
  
getProductData(){
  this.http.get("http://localhost:3000/products").subscribe(res=>{
     console.log(res)
    this.productList = res;
    console.log(this.productList);
    
    
  })
};


addProduct2(){


  
  console.log(this.productAdd.value);
  console.log(this.productList);
  const orderProducts = this.selectProduct;


 
  
  
  
  var data = this.productList.filter((proId:any) => {

    return proId.id == this.productAdd.value.product_id
  })
 
  var order = data[0];
  console.log(order);
  
  order ["qty"] = this.productAdd.value.qty
  orderProducts.push(order)  
  const updatedData = { products: orderProducts ,total_amount : this.totalAmount || 0};
  this.http.patch("http://localhost:3000/customerDetailes/"+this.orderId, updatedData ).subscribe((res) => {
    console.log(res);
    this.allData = [res]
    console.log(this.allData);

    if(this.allData[0].products){
      console.log(this.allData[0].products);
  
      this.totalCost = this.allData[0].products
      this.allTotalCost = this.totalCost.map((cos:any) => {
     return cos.qty * cos.price
        
      })
      console.log(this.allTotalCost );
      const customerTotal = this.allTotalCost.reduce(
        (accumulator:any, currentValue:any) => accumulator + currentValue,0
      );
      this.totalAmount = customerTotal;
      this.allData[0]["Total"] = this.totalAmount
      console.log(this.allData);      
    }
    this.productAdd.reset();    
  })
  
};

addProduct(){
  
  this.http.get("http://localhost:3000/customerDetailes/" + this.orderId).subscribe((res:any) => {
    console.log(res);
    this.selectProduct = res.products;

    this.addProduct2();
  
    
  }) 

}

save(){
  this.isViewDetails = true;
}

deleteData(id:any){
  console.log(id);

  console.log(this.allData);

  this.maniProduct = this.allData[0].products

  var data = this.maniProduct.filter((proId:any) => {

    return proId.id != id

  })
  console.log(data);
  
  var totalCost = data
  var allTotalCost = totalCost.map((cos:any) => {
 return cos.qty * cos.price
    
  })
  console.log(allTotalCost );
  const customerTotal = allTotalCost.reduce(
    (accumulator:any, currentValue:any) => accumulator + currentValue,0
  );
  var totalAmount = customerTotal;
  
  console.log(totalAmount);

  this.allData[0]["products"] = data;
  this.allData[0]["Total"] = totalAmount;

  const updatedData = { products: data ,total_amount : totalAmount};
  

  this.http.patch("http://localhost:3000/customerDetailes/"+this.orderId, updatedData ).subscribe((res) => {
    console.log(res);
  
    this.allData = [res]
    console.log(this.allData);

    if(this.allData[0].products){
      console.log(this.allData[0].products);
  
  }
})


}


}
