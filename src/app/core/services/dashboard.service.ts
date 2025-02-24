import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedDashboard } from '../interfaces/dashboard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getPaginatedPosts(pageIndex: number, pageSize: number = 10): Observable<PaginatedDashboard> {
    const params = {
      pageIndex: pageIndex.toString(),
      pageSize: pageSize.toString(),
    };

    return this.http.get<PaginatedDashboard>(`${environment.baseUrl}/Posts/get-paginated-posts?`, { params });
  }
}
