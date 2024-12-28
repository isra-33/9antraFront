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
    { image: 'assets/springang.png', title: 'Spring Boot / Angular', price: 350 },
    { image: 'assets/react.png', title: 'Node JS / React', price: 350 },
    { image: 'assets/flutter.png', title: 'Flutter / Firebase', price: 350 },
    { image: 'assets/busintel.webp', title: 'Business Intelligence', price: 350 },
    { image: 'assets/ai.jpg', title: 'Artificial Intelligence', price: 350 },
    { image: 'assets/devops.webp', title: 'DevOps', price: 350 }
  ];
}
