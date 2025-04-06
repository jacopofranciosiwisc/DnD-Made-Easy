import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';

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

  constructor() {}

  registerUser() {
    this.isRegistering = !this.isRegistering;
  }

  loginUser() {
    console.log('Login user logic goes here');
  }
}
