import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'dnd-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loggedIn: boolean = false;
  isLoggingIn: boolean = false;
  isRegistering: boolean = false;

  constructor(private router: Router) {}

  registerUser() {
    this.isRegistering = !this.isRegistering;
    this.router.navigate(['/register']);
  }

  loginUser() {
    console.log('Login user logic goes here');
  }
}
