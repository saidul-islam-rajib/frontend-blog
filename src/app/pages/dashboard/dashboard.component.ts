import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatedDashboard } from 'src/app/core/interfaces/dashboard';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  paginatedData: PaginatedDashboard = {
    pageIndex: 0,
    pageSize: 0,
    count: 0,
    data: []
  };
  pageIndex: number = 1;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.goToPage(this.pageIndex);
  }

  openPostTab(id: any){
    this.router.navigate(['home/posts/'+id])
  }

  goToPage(pageIndex: number): void {
    this.dashboardService.getPaginatedPosts(pageIndex).subscribe({
      next: (response) => {
        this.paginatedData = response;
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }

  get totalPages(): number[] {
    if (!this.paginatedData || !this.paginatedData.pageSize) {
      return [];
    }
    return Array.from(
      { length: Math.ceil(this.paginatedData.count / this.paginatedData.pageSize) },
      (_, i) => i + 1
    );
  }

  getPaginationPages(): number[] {
    const totalPages = Math.ceil(this.paginatedData.count / this.paginatedData.pageSize);
    const currentPage = this.paginatedData.pageIndex;

    const middlePagesCount = 5;
    const pages: number[] = [];

    if (currentPage > 3) {
      pages.push(1);
    }

    if (currentPage > 3) {
      pages.push(-1);
    }

    const startPage = Math.max(currentPage - Math.floor(middlePagesCount / 2), 1);
    const endPage = Math.min(currentPage + Math.floor(middlePagesCount / 2), totalPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push(-1);
    }

    if (currentPage <= totalPages) {
      pages.push(totalPages);
    }
    return pages;
  }
}
