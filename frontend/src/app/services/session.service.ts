import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private sessionsSubject = new BehaviorSubject<Session[] | null>(null);
  private currentSessionSubject = new BehaviorSubject<Session | null>(null);

  sessions$ = this.sessionsSubject.asObservable();
  currentSession$ = this.currentSessionSubject.asObservable();

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

  setSessions(sessions: Session[]) {
    this.sessionsSubject.next(sessions);
  }

  setCurrentSession(session: Session) {
    this.currentSessionSubject.next(session);
  }

  getCurrentSession(): Session | null {
    return this.currentSessionSubject.getValue();
  }
}
