import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { image: 'assets/course1.jpg', title: 'Spring Boot / Angular', price: 350 },
    { image: 'assets/course2.jpg', title: 'Node JS / React', price: 350 },
    { image: 'assets/course3.jpg', title: 'Flutter / Firebase', price: 350 },
    { image: 'assets/course4.jpg', title: 'Business Intelligence', price: 350 },
    { image: 'assets/course5.jpg', title: 'Artificial Intelligence', price: 350 },
    { image: 'assets/course6.jpg', title: 'DevOps', price: 350 }
  ];
}
