import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(
    localStorage.getItem('loggedIn') === 'true'
  );
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http
      .post('http://localhost:3000/api/users/register', user)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to register user'));
        })
      );
  }

  loginUser(user: any): Observable<any> {
    return this.http
      .post('http://localhost:3000/api/users/login', user, {
        withCredentials: true,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to login user'));
        })
      );
  }

  /**
   * Updates the login condition in both the BehaviorSubject and local storage. Both are necessary because:
   * Behavior Subject: Ensures the app can *react* to login state changes in real time
     localStorage: Ensures login state persists even on refresh or page close
   * @param value The boolean which to set the log in condition to
   */
  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
    localStorage.setItem('loggedIn', value ? 'true' : 'false');
  }

  get isLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }

  logoutUser(): Observable<boolean> {
    localStorage.removeItem('loggedIn');
    this.loggedIn.next(false);
    return of(true);
  }
}
