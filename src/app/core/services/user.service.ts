import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserInformation } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.baseUrl}`;
  constructor(private http: HttpClient) { }

  getUserById(userId: string): Observable<User>{
    const url = `${this.apiUrl}/${userId}`;
    let response = this.http.get<User>(url);
    return response;
  }
  getDefaultUser(): Observable<UserInformation>{
    const url = `${environment.baseUrl}/User/get-default-user`;
    let response = this.http.get<UserInformation>(url);
    return response;
  }
}
