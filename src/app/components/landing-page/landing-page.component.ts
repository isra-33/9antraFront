import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { RegisterComponent } from "../register/register.component";
import { CoursesComponent } from "../courses/courses.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone: true,
  imports: [
    NavbarComponent, 
    RegisterComponent, 
    CoursesComponent,
     ContactComponent],
})
export class LandingPageComponent {
  courses = [
    { image: 'assets/course1.jpg', title: 'Spring Boot / Angular', price: 350 },
    { image: 'assets/course2.jpg', title: 'Node JS / React', price: 350 },
    { image: 'assets/course3.jpg', title: 'Flutter / Firebase', price: 350 },
    { image: 'assets/course4.jpg', title: 'Business Intelligence', price: 350 },
    { image: 'assets/course5.jpg', title: 'Artificial Intelligence', price: 350 },
    { image: 'assets/course6.jpg', title: 'DevOps', price: 350 },
  ];
}
