import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'dnd-login',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatCardModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  loginUser() {
    this.authService.loginUser(this.credentials).subscribe({
      next: (response) => {
        this.router.navigate(['/home']);
        console.log('Login successful:', response);
        this.authService.setLoggedIn(true);
      },
      error: (error) => console.error('Error loggin in user:', error),
    });
  }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
