import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdditionalSkill } from 'src/app/core/interfaces/additional-skill';
import { Education } from 'src/app/core/interfaces/education';
import { Experience } from 'src/app/core/interfaces/experience';
import { Interest } from 'src/app/core/interfaces/interest';
import { Project } from 'src/app/core/interfaces/project';
import { Publication } from 'src/app/core/interfaces/publication';
import { UserInformation } from 'src/app/core/interfaces/user-information';
import { AdditionalSkillService } from 'src/app/core/services/additional-skill.service';
import { CalculateDurationService } from 'src/app/core/services/common/calculate-duration.service';
import { ImageService } from 'src/app/core/services/common/image.service';
import { EducationService } from 'src/app/core/services/education.service';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { InterestService } from 'src/app/core/services/interest.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { PublicationService } from 'src/app/core/services/publication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  user: UserInformation = {
    userId: "",
    userName: "",
    userEmail: "",
    userBio: ""
  };

  experiences:  Experience[] = [];
  educationList: Education[] = [];
  publicationList: Publication[] = [];
  additionalSkillList: AdditionalSkill[] = [];
  interstList: Interest[] = [];
  projectList: Project[] = [];

  constructor(
    private experienceService : ExperienceService,
    private durationService: CalculateDurationService,
    private educationService: EducationService,
    private publicationService: PublicationService,
    private additionalSkillService: AdditionalSkillService,
    private interestService: InterestService,
    private projectService: ProjectService,
    private imageService: ImageService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.loadExperiences();
    this.loadEducations();
    this.loadPublication();
    this.loadAdditionalSkill();
    this.loadInterest();
    this.laodProject();
  }

  loadExperiences(): void {
    this.experienceService.getExperiences().subscribe({
      next:(data) => {
        this.experiences = data;
      },
      error: (err) => {
        this.router.navigate(['not-found']);
      }
    });
  }

  loadEducations(): void{
    this.educationService.getEducations().subscribe({
      next:(data) => {
        this.educationList = data;
      },
      error: () => {
        this.router.navigate(['not-found']);
      }
    });
  }

  loadPublication(): void{
    this.publicationService.getPublications().subscribe({
      next:(data) => {
        this.publicationList = data;
      },
      error: () => {
        this.router.navigate(['not-found']);
      }
    });
  }

  loadAdditionalSkill(): void{
    this.additionalSkillService.getAdditionalSkills().subscribe({
      next:(data) => {
        this.additionalSkillList = data;
      },
      error: () => {
        this.router.navigate(['not-found']);
      }
    });
  }

  loadInterest(): void{
    this.interestService.getInterest().subscribe({
      next:(data) => {
        this.interstList = data;
      },
      error: () => {
        this.router.navigate(['not-found']);
      }
    });
  }
  laodProject(): void{
    this.projectService.getProject().subscribe({
      next:(data) => {
        this.projectList = data;
      },
      error: (err) => {
        this.router.navigate(['not-found']);
      }
    });
  }

  calculateDuration(startDate: Date, endDate: Date, isCurrentEmployee: boolean): string {
    const effectiveEndDate = isCurrentEmployee ? new Date() : endDate;
    return this.durationService.calculateWorkingDuration(startDate, effectiveEndDate);
  }
  getImage(logo: any): string{
    return this.imageService.getImage(logo);
  }
}
