import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() skills: {
    [key: string]: { num: number; proficiency: boolean };
  } = {};
  @Output() update = new EventEmitter();

  isModalOpen: boolean = false;

  updateStat() {
    this.update.emit(this.skills);
  }
}
