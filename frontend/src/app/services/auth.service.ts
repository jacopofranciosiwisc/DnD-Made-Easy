import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/api/users/register';

  registerUser(user: any): Observable<any> {
    return this.http.post(this.url, user).pipe(
      catchError((error) => {
        console.error('Error registering user:', error);
        return throwError(() => new Error('Failed to register user'));
      })
    );
  }
}
