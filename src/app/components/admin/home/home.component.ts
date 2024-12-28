import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../landingpage/navbar/navbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports: [FormsModule, NavbarComponent]
})
export class AdminHomeComponent {
  courses = [
    { image: 'assets/images/react.png', title: 'Node JS / React', price: 350 },
    { image: 'assets/images/flutter.png', title: 'Flutter / Firebase', price: 350 },
    { image: 'assets/images/ai.jpg', title: 'Artificial Intelligence', price: 350 },
  ];

  isModalOpen = false;
  isEditing = false;
  currentCourse: any = { image: '', title: '', price: '' };

  constructor(private router: Router) {}

  openCreateModal() {
    this.isEditing = false;
    this.currentCourse = { image: '', title: '', price: '' };
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
      const index = this.courses.findIndex((c) => c.title === this.currentCourse.title);
      this.courses[index] = { ...this.currentCourse };
    } else {
      this.courses.push({ ...this.currentCourse });
    }
    this.isModalOpen = false;
  }

  deleteCourse(course: any) {
    this.courses = this.courses.filter((c) => c !== course);
  }

  logout() {
    this.router.navigate(['/admin/login']);
  }
}
