import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-report',
  templateUrl: './product-report.component.html',
  styleUrls: ['./product-report.component.css']
})
export class ProductReportComponent implements OnInit {
data:any

  constructor(private http: HttpClient, private product:ProductService) { }

  ngOnInit(): void {
    this.getData()
    
  }
  getData(){
    this.product.getProducts().subscribe(res=>{
      this.data=res;
      console.log(this.data);
    })
  }


  deleteProduct(id: any): void {
    // Send HTTP DELETE request
    this.http.delete(`http://localhost:3000/products/${id}`).subscribe(
      () => {
        // Update the data after successful deletion
        this.getData();
      },
      error => {
        console.error('Error deleting product:', error);
      }
    );
  }
  
}