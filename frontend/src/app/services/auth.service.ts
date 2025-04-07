import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  private url = 'http://localhost:3000/api/users/register';

  registerUser(user: any): Observable<any> {
    return this.http.post(this.url, user).pipe(
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
  }

  getLoggedIn() {
    return this.loggedIn.getValue();
  }
}
