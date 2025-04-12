import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SessionComponent } from './session/session.component'; // Import SessionComponent
import { AuthGuard } from './services/auth-guard.service'; // Corrected import

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, title: 'DnD Made Easy' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'session',
    component: SessionComponent, // Use SessionComponent directly
    canActivate: [AuthGuard], // Protect with AuthGuard
  },
];
