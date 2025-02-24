import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent {
  @Input() postId!: string;
  inputControl: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.inputControl = this.fb.group({
      commentorName: ['', [Validators.required, Validators.maxLength(100)]],
      comment: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  onSubmit(): void {
    if (this.inputControl.valid) {
      const postCommentApiUrl = `${environment.baseUrl}/comment/posts/${this.postId}/create-comment`;

      const payload = {
        Name: this.inputControl.get('commentorName')?.value,
        Comments: this.inputControl.get('comment')?.value,
        PostId: this.postId,
      };

      this.http.post(postCommentApiUrl, payload).subscribe(
        () => {
          alert('Comment posted successfully');
          location.reload();
        },
        (error) => {
          console.error('Error details:', error.error.errors);
        }
      );
    } else {
      alert('Form is invalid');
    }
  }
}
