import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'dnd-register',
  standalone: true,
  imports: [MatCardModule, FormsModule, RegisterComponent],
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
    console.log('Registering user:', this.credentials);
    this.authService.registerUser(this.credentials);
  }
}
