import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  errorMessage: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  loginUser() {
    this.authService.loginUser(this.credentials).subscribe({
      next: () => {
        this.authService.setLoggedIn(true);
        this.router.navigate(['/home']);
      },
      error: () => {
        this.errorMessage = 'Invalid login...';
      },
    });
  }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
