import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  createSession(): Observable<any> {
    return this.http
      .post(
        'http://localhost:3000/api/sessions/create',
        { sessionName: 'testSession' },
        { withCredentials: true }
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to create session'));
        })
      );
  }
}
