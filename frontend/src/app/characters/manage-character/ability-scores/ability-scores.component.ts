import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface CharacterAbilityScoresData {
  abilities: string[];
}

@Component({
  selector: 'dnd-ability-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability-scores.component.html',
  styleUrl: './ability-scores.component.scss',
})
export class AbilityScoresComponent {
  abilityScores: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<CharacterAbilityScoresData>('assets/character.json')
      .subscribe((data) => {
        console.log(data);
        this.abilityScores = data.abilities;
      });
  }
}
