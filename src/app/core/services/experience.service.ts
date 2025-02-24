import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = `${environment.baseUrl}/experience/get-experiences`

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experience[]>{
    let response = this.http.get<Experience[]>(this.apiUrl);
    return response;
  }
}
