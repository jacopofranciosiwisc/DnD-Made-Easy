import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dnd-register',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    RegisterComponent,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  credentials = {
    email: '',
    password: '',
    username: '',
  };

  constructor(private authService: AuthService) {}

  registerUser() {
    this.authService.registerUser(this.credentials).subscribe({
      error: (error) => console.error('Error registering user:', error),
    });
  }
}
