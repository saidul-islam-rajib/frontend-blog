import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publication } from '../interfaces/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private apiUrl = `${environment.baseUrl}/publication/get-publications`
  constructor(private http: HttpClient) { }

  getPublications(): Observable<Publication[]>{
    let response = this.http.get<Publication[]>(this.apiUrl);
    return response;
  }
}
