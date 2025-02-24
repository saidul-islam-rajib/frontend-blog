import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = `${environment.baseUrl}/Posts`;
  private postId: string | null = null;

  constructor(private http: HttpClient) { }

  setPostId(id: string): void{
    this.postId = id;
  }

  getPostById(postId: string): Observable<Post> {
    const data_url = `${this.postUrl}/${postId}`;
    let response = this.http.get<Post>(data_url);
    return response;
  }

  getPostId(): string | null{
    return this.postId;
  }

  getRecentPosts(): Observable<Post[]>{
    const data_url = `${this.postUrl}/get-all-posts`;
    let response = this.http.get<Post[]>(data_url);
    return response;
  }

}
