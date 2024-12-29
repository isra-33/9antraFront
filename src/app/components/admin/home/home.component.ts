import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../landingpage/navbar/navbar.component";
import { CourseService } from '../../../service/course.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [NavbarComponent,FormsModule,CommonModule]
})
export class AdminHomeComponent implements OnInit {
  courses: any[] = [];
  isModalOpen = false;
  isEditing = false;
  currentCourse: any = { id: null, image: '', title: '', price: '' };

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCourses();  // Load the courses when the component is initialized
  }

  loadCourses(): void {
    this.courseService.getAllCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  openCreateModal() {
    this.isEditing = false;
    this.currentCourse = { id: null, image: '', title: '', price: '' };
    this.isModalOpen = true;
  }

  openEditModal(course: any) {
    this.isEditing = true;
    this.currentCourse = { ...course };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveCourse() {
    if (this.isEditing) {
      this.courseService.updateCourse(this.currentCourse.id, this.currentCourse).subscribe(updatedCourse => {
        const index = this.courses.findIndex(c => c.id === updatedCourse.id);
        if (index !== -1) {
          this.courses[index] = updatedCourse;
        }
        this.isModalOpen = false;
      });
    } else {
      this.courseService.addCourse(this.currentCourse).subscribe(newCourse => {
        this.courses.push(newCourse);
        this.isModalOpen = false;
      });
    }
  }
  

  deleteCourse(course: any) {
    this.courseService.deleteCourse(course.id).subscribe(() => {
      this.courses = this.courses.filter(c => c.id !== course.id);
    });
  }

  logout() {
    this.router.navigate(['/admin/login']);
  }
}
