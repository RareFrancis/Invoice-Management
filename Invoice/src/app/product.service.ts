import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  adddata(data: any){
    return this.http.post<any>('http://localhost:3000/posts', data);
  }

  getProducts() {
    return this.http.get<any[]>('http://localhost:3000/posts');
  }
}
