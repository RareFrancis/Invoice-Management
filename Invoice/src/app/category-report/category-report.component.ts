import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-report',
  templateUrl: './category-report.component.html',
  styleUrls: ['./category-report.component.css']
})
export class CategoryReportComponent implements OnInit {
  data: any;

  constructor(private category:CategoryService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.category.getProducts().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }


deleteData(id: number): void {
  // Send HTTP DELETE request
  this.http.delete(`http://localhost:3000/category/${id}`).subscribe(
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

