import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
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
    return this.http.post('http://localhost:3000/api/users/login', user).pipe(
      catchError((error) => {
        return throwError(() => new Error('Failed to login user'));
      })
    );
  }

  setLoggedIn(value: boolean) {
    this.loggedIn.next(value);
    localStorage.setItem('loggedIn', value ? 'true' : 'false');
  }

  get isLoggedIn(): boolean {
    return this.loggedIn.getValue();
  }
}
