import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopicWithTag } from '../interfaces/topic-with-tag';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicWithTagService {
  private apiUrl = `${environment.baseUrl}/Tag/get-tags-with-topic`

  constructor(private http: HttpClient) { }

  getTopicWithTag(): Observable<TopicWithTag[]>{
    let response = this.http.get<TopicWithTag[]>(this.apiUrl).pipe(
      retry(3),
      catchError(err => {
        console.error("Error fetching topic with tags : ", err);
        return throwError(() => new Error('Failed to fetch topic with tags after retries'));
      })
    );
    return response;
  }
}
