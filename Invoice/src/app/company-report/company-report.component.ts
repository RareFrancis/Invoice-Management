import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-report',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css']
})
export class CompanyReportComponent implements OnInit {
  data:any
errorMessage: any;
  // errorMessage: string;
  
    constructor(private http: HttpClient, private product:CompanyService) { }
  
    ngOnInit(): void {
      this.getData()
      
    }
    getData(){
      this.product.getProducts().subscribe(res=>{
        this.data=res;
        console.log(this.data);
      });
    }
  
    deleteCompany(id: number): void {
      // Send HTTP DELETE request
      this.http.delete(`http://localhost:3000/company/${id}`).subscribe(
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