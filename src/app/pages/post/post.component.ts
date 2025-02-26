import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post';
import { CommentService } from 'src/app/core/services/comment.service';
import { ImageService } from 'src/app/core/services/common/image.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId!: string;
  post: Post | null = null;
  comment: Comment[] | null = [];
  showInputField = false;
  inputControl: any;

  constructor(
    private router: Router,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    if (postId) {
      this.postId = postId;

      this.postService.getPostById(postId).subscribe({
        next: (data) => {
          this.post = data;
        },
        error: (err) => {
          this.router.navigate(['not-found']);
        },
      });
    }

    this.inputControl = new FormControl('');
  }

  replaceWithInput() {
    this.showInputField = true;
  }
  getImage(logo: any): string{
    const response = this.imageService.getImage(logo);
    return response;
  }
}
