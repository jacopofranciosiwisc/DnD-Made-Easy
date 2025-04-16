import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessions: Session[] | null = null;

  constructor(private http: HttpClient) {}

  createSession(sessionName: String): Observable<any> {
    return this.http
      .post(
        'http://localhost:3000/api/sessions/create',
        { sessionName: sessionName },
        { withCredentials: true }
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to create session'));
        })
      );
  }

  loadSessions(): Observable<any> {
    return this.http
      .get('http://localhost:3000/api/sessions/load', { withCredentials: true })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Failed to create session'));
        })
      );
  }
}
