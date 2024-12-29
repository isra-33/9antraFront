import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landingpage/landing-page/landing-page.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminHomeComponent } from './components/admin/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';

// Define the application routes
export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'admin', component: LoginComponent }, // Admin login page
  { path: 'admin/home', component: AdminHomeComponent }, // Admin home page
  { path: 'courses', component: CourseListComponent }, // Admin home page
  { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
