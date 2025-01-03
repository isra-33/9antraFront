import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[FormsModule,CommonModule]
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  admins = [
    {email: 'isra@chalbi.com',
    password: 'isra123',
    },
  ];

  errorMessage = '';
  showErrorModal = false;

  constructor(private router: Router) {}

  onSubmit() {
    const { email, password } = this.loginData;

    const isValidAdmin = this.admins.some(
      (admin) => admin.email === email && admin.password === password
    );

    if (isValidAdmin) {
      this.router.navigate(['/admin/home']);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
      this.showErrorModal = true;
    }
  }

  closeErrorModal() {
    this.showErrorModal = false;
  }
}
