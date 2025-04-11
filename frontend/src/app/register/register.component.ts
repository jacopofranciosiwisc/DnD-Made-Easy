import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'dnd-register',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatCardModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  credentials = {
    email: '',
    password: '',
    username: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    this.authService.registerUser(this.credentials).subscribe({
      next: (response) => {
        console.log('User registration successful!', response);
        this.router.navigate(['/login']);
      },
      error: (error) => console.error('Error registering user:', error),
    });
  }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
