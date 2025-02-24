import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../interfaces/education';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = `${environment.baseUrl}/education/get-educations`;
  constructor(private http: HttpClient) { }

  getEducations(): Observable<Education[]>{
    let response = this.http.get<Education[]>(this.apiUrl);
    return response;
  }
}
