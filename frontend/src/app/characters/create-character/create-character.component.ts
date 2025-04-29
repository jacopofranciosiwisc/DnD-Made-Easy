import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dnd-create-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.scss',
})
export class CreateCharacterComponent {
  characterStructure: any = {};
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/character.json').subscribe((data) => {
      this.characterStructure = data;
      console.log(data);
    });
  }

  goBack() {
    this.router.navigate(['characters']);
  }

  saveCharacter() {
    console.log('To implement');
  }
}
