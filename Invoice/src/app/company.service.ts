import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/company';

  constructor(private http: HttpClient) { }

  addData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/company', data);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/company');
  }

  updateProduct(id: number, ProductTitle: string, Discription: string): Observable<any> {
    const requestBody = {
      Discription: Discription
    };
    return this.http.put(`http://localhost:3000/company/${id}`, requestBody);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/company/${id}`);
  }

  updateEmployee(data: any, id: number): Observable<any> {
    return this.http.put(`http://localhost:3000/company/${id}`, data);
  }

  deleteProduct(id: any){
    return this.http.delete("http://localhost:3000/company/"+id)
  }
}
