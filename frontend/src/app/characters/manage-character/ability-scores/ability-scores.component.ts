import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dnd-ability-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability-scores.component.html',
  styleUrl: './ability-scores.component.scss',
})
export class AbilityScoresComponent {
  @Input() abilities: { [key: string]: number } = {};

  constructor(private http: HttpClient) {}
}
