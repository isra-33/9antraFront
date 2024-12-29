import { Component } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { NavbarComponent } from "../landingpage/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }
  loadCourses() {
    this.courseService.getAllCourses().subscribe((data) => {
      this.courses = data;
    });
  }
}
