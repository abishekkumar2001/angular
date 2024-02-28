import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(data: any): Observable<any> {
    const signupUrl = 'http://localhost:3000/signup'; // Example URL
    return this.http.post<any>(signupUrl, data);
  }

}
