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
  id: any;  
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
deleteData(id: any) {
  // Send HTTP DELETE request
  console.log(id);
  
  this.http.delete(`http://localhost:3000/customerDetailes/${id}`).subscribe(
    (res) => {
      // Update the data after successful deletion
      // this.getData();
      console.log(res)
      this.http.get("http://localhost:3000/customerDetailes").subscribe((res:any)=>{
        this.report = res;
          
        });
    },
    error => {
      console.error('Error deleting product:', error);
    }
  );
}
  getData() {
    throw new Error('Method not implemented.');
  }
}



