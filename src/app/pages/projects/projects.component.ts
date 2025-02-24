import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Project } from 'src/app/core/interfaces/project';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  feedbackForm!: FormGroup;
  projectList: Project[] = [];
  constructor(
    private fb: FormBuilder,
    private projectService : ProjectService
  ){
  }

  ngOnInit(): void{
    this.laodProject();
    this.initializeForm();
  }

  private initializeForm(): void {
    this.feedbackForm = this.fb.group({
      comment: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.setFormData({
      email: 'test@example.com',
      comment: 'This is a pre-filled message.'
    });
  }

  private setFormData(data: { email: string; comment: string }): void {
    this.feedbackForm.patchValue(data);
  }

  laodProject(): void{
    this.projectService.getProject().subscribe({
      next:(data) => {
        this.projectList = data;
        console.log("Projects : ", this.projectList);
      },
      error: (err) => {
        console.error("Project Error: ", err);
      }
    });
  }

  onSubmit(feedbackForm: NgForm): void {
    if (feedbackForm.valid) {
      const feedbackData = feedbackForm.value;

      this.projectService.sendFeedback(feedbackData).subscribe({
        next: (response) => {
          alert("Your feedback has been submitted successfully! The admin will respond to you shortly.")
        },
        error: (err) => {
          console.error("Error sending feedback:", err);
        }
      });

      feedbackForm.reset();
    }
  }

}
