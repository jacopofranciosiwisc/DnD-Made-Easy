import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dnd-characters',
  standalone: true,
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  constructor(private router: Router) {}

  loadCharacter() {
    console.log('Load a character');
  }

  createCharacter() {
    console.log('Creating character');
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
