import { Component } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { NavbarComponent } from "../landingpage/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: any[] = [
    { image: 'assets/images/springang.png', title: 'Spring Boot / Angular', price: 350 },
    { image: 'assets/images/react.png', title: 'Node JS / React', price: 350 },
    { image: 'assets/images/flutter.png', title: 'Flutter / Firebase', price: 350 },
    { image: 'assets/images/busintel.webp', title: 'Business Intelligence', price: 350 },
    { image: 'assets/images/ai.jpg', title: 'Artificial Intelligence', price: 350 },
    { image: 'assets/images/devops.webp', title: 'DevOps', price: 350 },
  ];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = [...this.courses, ...data];
    });
  }
}
