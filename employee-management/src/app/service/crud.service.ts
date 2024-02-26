import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { 

   }

   API_URL = 'http://localhost:3000/students';
   createEmployee(body:any){
    return this.http.post(`${this.API_URL}`,body
    );
   }

  

}
