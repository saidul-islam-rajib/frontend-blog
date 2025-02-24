import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecentPostComponent } from './pages/recent-post/recent-post.component';
import { PostComponent } from './pages/post/post.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

const routes: Routes = [  
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    data:{
      title: 'admin/dashboard',
      reuse: true,
      pagetype: 'view'
    }
  },
  {
    path: 'home',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'home/posts/:id',
    component: PostComponent,
    data: {
      title: 'Dashboard',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'topics',
    component: TopicsComponent,
    data: {
      title: 'Topics',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'recent',
    component: RecentPostComponent,
    data: {
      title: 'Recent-Post',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About',
      reuse: true,
      pageType: 'view',
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
