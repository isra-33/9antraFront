import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'], // Ensure the correct path
})
export class CoursesComponent {
  courses = [
    { image: 'assets/images/springang.png', title: 'Spring Boot / Angular', price: 350 },
    { image: 'assets/images/react.png', title: 'Node JS / React', price: 350 },
    { image: 'assets/images/flutter.png', title: 'Flutter / Firebase', price: 350 },
    { image: 'assets/images/busintel.webp', title: 'Business Intelligence', price: 350 },
    { image: 'assets/images/ai.jpg', title: 'Artificial Intelligence', price: 350 },
    { image: 'assets/images/devops.webp', title: 'DevOps', price: 350 },
  ];
  constructor(private router: Router) {}

  viewMore() {
    this.router.navigate(['/course-list']);
  }
}
