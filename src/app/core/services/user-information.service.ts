import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserInformation } from '../interfaces/user-information';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private apiUrl = `${environment.baseUrl}/User/get-default-user`

  constructor(private http: HttpClient) { }

  getUserInformation(): Observable<UserInformation>{
    let response = this.http.get<UserInformation>(this.apiUrl);
    return response;
  }
}
