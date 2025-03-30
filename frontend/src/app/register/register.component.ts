import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'dnd-register',
  standalone: true,
  imports: [MatCardModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  credentials = {
    email: '',
    password: '',
    username: '',
  };
}
