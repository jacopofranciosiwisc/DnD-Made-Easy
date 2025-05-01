import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface CharacterSkillsData {
  skills: string[];
}

@Component({
  selector: 'dnd-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<CharacterSkillsData>('assets/character.json')
      .subscribe((data) => {
        console.log(data);
        this.skills = data.skills;
      });
  }
}
