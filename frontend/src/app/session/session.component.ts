import { Component } from '@angular/core';

@Component({
  selector: 'dnd-session',
  standalone: true,
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent {
  sessionName: string = 'My DnD Session';

  constructor() {}

  loadSession() {
    console.log('Loading session:', this.sessionName);
    // Add logic to load session data from the backend
  }
}
