import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // Import AppRoutingModule
import { provideHttpClient } from '@angular/common/http';
import { LandingPageComponent } from './components/landingpage/landing-page/landing-page.component';
import { AdminHomeComponent } from './components/admin/home/home.component';
import { CourseListComponent } from './components/course-list/course-list.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    LandingPageComponent,
    BrowserModule,
    CommonModule,
    FormsModule,
    AdminHomeComponent,
    CourseListComponent,
    AppRoutingModule,
  ],
  providers: [provideHttpClient()],
})
export class AppModule {}
