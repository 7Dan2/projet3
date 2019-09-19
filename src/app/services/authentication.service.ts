import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = '192.168.0.3:8081/api';
  private http: HttpClient;

  constructor(http: HttpClient)
  {
    this.http = http;
  }

  public isAllowed(p_user:User)
  {
    return this.http.post(`${this.baseUrl}/users/login`, p_user);
  }

  
}
