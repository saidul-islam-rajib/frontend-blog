import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/post.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-featured-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent {
  posts: Post[] = [];
  userNames: { [userId: string]: string } = {};

  constructor(
    private router: Router,
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void{
    this.loadPosts();
  }

  loadPosts(): void{
    this.postService.getRecentPosts().subscribe({
      next:(data) => {
        this.posts = data;
        this.posts.forEach(post => {
          this.fetchUserName(post.userId);
        });
      },
      error:(err) => {
        console.log("recent post error : ", err);
      }
    })
  }

  fetchUserName(userId: string): void {
    if (this.userNames[userId]) {
      return;
    }

    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        this.userNames[userId] = user.fullname;
      },
      error: (err) => {
        console.log('Error fetching user name: ', err);
      }
    });
  }

  getUserName(userId: string): string {
    return this.userNames[userId] || 'Loading...';
  }
  openPostTab(id: any){
    this.router.navigate(['home/posts/'+id])
  }

}
