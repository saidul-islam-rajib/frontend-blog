import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { PagesComponent } from './pages/pages.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { PopularTagsComponent } from './pages/popular-tags/popular-tags.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecentPostComponent } from './pages/recent-post/recent-post.component';
import { PostComponent } from './pages/post/post.component';
import { FeedbackComponent } from './common/feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { CommentSectionComponent } from './pages/sharedComponent/comment-section/comment-section.component';
import { CeilPipe } from './core/pipes/ceil.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ProjectsComponent,
    AboutComponent,
    TopicsComponent,
    RecentPostComponent,
    PopularTagsComponent,
    FooterComponent,
    DashboardComponent,
    PostComponent,
    FeedbackComponent,
    NotFoundComponent,
    CommentSectionComponent,
    CeilPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
