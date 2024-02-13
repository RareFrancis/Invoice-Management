import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
report: any;
  product: any;
  data: any;
  
constructor(private http:HttpClient ,private order:CategoryService){}

ngOnInit() {
  this.http.get("http://localhost:3000/customerDetailes").subscribe((res:any)=>{
    console.log(res)
    this.report = res;
      
    });// Call getData method when component initializes
}

// getData() {
//   // Assuming getOrder method requires an ID, provide it here
//   const orderId = 'someId'; // Replace 'someId' with the actual ID
//   this.order.getOrder().subscribe((res: any) => {
//     this.data = res;
//     console.log(this.data);
//   }, (error) => {
//     console.error('Error fetching order data:', error);
//   });
// }
}



