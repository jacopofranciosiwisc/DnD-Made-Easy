import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../auth/register/register.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dnd-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  loggedIn: boolean = false;
  private authSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Subscribe to the loggedIn$ observable
    this.authSubscription = this.authService.loggedIn$.subscribe((state) => {
      this.loggedIn = state;
      console.log('Logged in state updated:', this.loggedIn);
    });
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  loginUser() {
    this.router.navigate(['/login']);
  }

  logoutUser() {
    this.authService.logoutUser();
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
