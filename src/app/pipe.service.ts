import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipeService {

  public Url:string ="./assets/Employee.json"
  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get<any>(this.Url);
  }

  sendData(m){
   return this.http.post('http://localhost:3000/posts',m)

  }
}
