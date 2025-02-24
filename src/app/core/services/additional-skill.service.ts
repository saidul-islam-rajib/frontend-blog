import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdditionalSkill } from '../interfaces/additional-skill';

@Injectable({
  providedIn: 'root'
})
export class AdditionalSkillService {
  private apiUrl = `${environment.baseUrl}/AdditionalSkill/get-additional-skill`
  constructor(private http: HttpClient) { }

  getAdditionalSkills(): Observable<AdditionalSkill[]>{
    let response = this.http.get<AdditionalSkill[]>(this.apiUrl);
    return response;
  }
}
