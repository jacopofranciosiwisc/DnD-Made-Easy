import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dnd-ability-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ability-scores.component.html',
  styleUrl: './ability-scores.component.scss',
})
export class AbilityScoresComponent {
  @Input() abilities: { [key: string]: { score: number; modifier: number } } =
    {};
  @Output() update = new EventEmitter();

  constructor() {}

  updateStat(event: any, key: string) {
    this.abilities[key] = {
      score: parseInt(event.target.value),
      modifier: Math.floor((parseInt(event.target.value) - 10) / 2),
    };
    this.update.emit(this.abilities);
  }

  displayModifier(score: number) {
    if (!score) {
      return `+ 0`;
    }
    const modifier = Math.floor((score - 10) / 2);

    if (modifier >= 0) {
      return `+ ${modifier}`;
    } else {
      return `- ${Math.abs(modifier)}`;
    }
  }
}
