import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'dnd-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn;
    console.log('Logged in:', this.loggedIn);
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  loginUser() {
    this.router.navigate(['/login']);
  }

  logoutUser() {
    console.log('Implement logout');
  }
}
