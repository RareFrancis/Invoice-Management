import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private apiUrl = 'http://localhost:3000/category';
  constructor(private http: HttpClient) { }

  addData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/category', data);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/category');
  }

  updateProduct(id: number, ProductTitle: string, Discription: string): Observable<any> {
    const requestBody = {
      ProductTitle: ProductTitle,
      Discription: Discription
    };
    return this.http.put(`http://localhost:3000/category/${id}`, requestBody);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/category/${id}`);
  }
  // getOrder(id: number): Observable<any> {
  //   return this.http.get<any[]>(`http://localhost:3000/customerDetails`);
  // }


  getOrder(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/customerDetails'); // Replace 'URL_TO_GET_ORDERS' with your actual API endpoint
  }


  updateEmployee(data: any, id: number): Observable<any> {
    return this.http.put(`http://localhost:3000/category/${id}`, data);
  }

  deleteProduct(id: any){
    return this.http.delete('http://localhost:3000/category/'+id)
  }

}

