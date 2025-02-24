import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interest } from '../interfaces/interest';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  private apiUrl = `${environment.baseUrl}/interest/get-interests`

  constructor(private http: HttpClient) { }

  getInterest(): Observable<Interest[]>{
      let response = this.http.get<Interest[]>(this.apiUrl);
      return response;
    }
}
