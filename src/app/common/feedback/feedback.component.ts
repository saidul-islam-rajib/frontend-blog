import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackInterface } from 'src/app/core/interfaces/feedback';
import { CommentService } from 'src/app/core/services/comment.service';
import { ImageService } from 'src/app/core/services/common/image.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  comment_list: FeedbackInterface[] | null = [];
  @Input() postId!: string;
  constructor(
    private commentService: CommentService,
    private imageService: ImageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.commentService.getCommentByPostId(this.postId).subscribe({
      next: (response) => {
        this.comment_list = response;
      },
      error: (err) => {
        this.router.navigate(['not-found']);
      },
    });
  }

  getImage(image: any) : string{
    return this.imageService.getImage(image);
  }
}
