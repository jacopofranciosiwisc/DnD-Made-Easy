import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dnd-create-character',
  standalone: true,
  imports: [],
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.scss',
})
export class CreateCharacterComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['characters']);
  }

  saveCharacter() {
    console.log('To implement');
  }
}
