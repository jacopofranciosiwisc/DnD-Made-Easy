import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../auth/register/register.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { SessionService } from '../services/session.service';
import { FormsModule } from '@angular/forms';
import { Session } from '../interfaces/session';

@Component({
  selector: 'dnd-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  loggedIn: boolean = false;
  private authSubscription!: Subscription;

  sessionName: String = '';
  creatingSession: boolean = false;
  loadingSession: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    protected sessionService: SessionService
  ) {}

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

  enterSessionDetails() {
    this.creatingSession = !this.creatingSession;
  }

  goBack() {
    if (this.creatingSession) {
      this.creatingSession = false;
    }

    if (this.loadingSession) {
      this.loadingSession = false;
    }
  }

  createSession() {
    if (this.sessionName) {
      console.log('Creating session');
      this.sessionService.createSession(this.sessionName).subscribe({
        next: (res) => {
          const sessionId = res.id;
          console.log(sessionId);
          this.router.navigate([`/session/${sessionId}`]);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  loadSession() {
    this.loadingSession = true;
    console.log('Loading session');
    this.sessionService.loadSessions().subscribe({
      next: (res) => {
        const sessions = res.sessions;
        this.sessionService.setSessions(sessions);
        console.log(sessions);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  selectSession(session: Session) {
    this.sessionService.setCurrentSession(session);
    console.log(this.sessionService.currentSession$);
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
