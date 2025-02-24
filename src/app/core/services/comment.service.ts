import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeedbackInterface } from '../interfaces/feedback';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentUrl = `${environment.baseUrl}/Comment/get-comments-by-post-id`;

  constructor(private http: HttpClient) {}

  getCommentByPostId(postId: string): Observable<FeedbackInterface[]> {
    const data_url = `${this.commentUrl}?postId=${postId}`;
    let response = this.http.get<FeedbackInterface[]>(data_url);
    return response;
  }
}
