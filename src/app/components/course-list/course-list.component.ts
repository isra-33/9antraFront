import { Component } from '@angular/core';
import { CourseService } from '../../service/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
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
