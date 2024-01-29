import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data:any
  constructor(private http:HttpClient) { }
  
  createdetails(data:any){
    return this.http.put<any>("http://localhost:3000/login",data)
  }
  fetchData(id:number){
    return this.http.get("http://localhost:3000/login"+id)
  }
 PostData(data:any) {  
    return this.http.post( "http://localhost:3000/login",data);
    }

   
  }

  
