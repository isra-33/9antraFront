import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  displayedCourses: any[] = []; 

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
        this.displayedCourses = this.courses.slice(0, 6); 
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
  viewMore() {
    this.router.navigate(['/courses']);
  }
}
