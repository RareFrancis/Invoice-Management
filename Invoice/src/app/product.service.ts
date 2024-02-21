import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  adddata(data: any){
    return this.http.post<any>('http://localhost:3000/posts', data);
  }

  getProducts() {
    return this.http.get<any[]>('http://localhost:3000/products');
  }


  changePassword(id:number,ProductTitle: string, ProductCode:string,TotalStock:string,discription:string): Observable<any> {
      
    const requestBody = {
      ProductTitle:ProductTitle,
      ProductCode:ProductCode,
      TotalStock:TotalStock,
      discription:discription
    };
     return this.http.put("http://localhost:3000/posts"+id, requestBody);
   }

   fetchData(id:number){
     return this.http.get("http://localhost:3000/posts/"+id)
   }
   updateemployee(data:any,id:number){
    return this.http.put("http://localhost:3000/posts/"+id,data)
   }

   deleteProduct(id: any){
    return this.http.delete("http://localhost:3000/posts/"+id)
  }
}


