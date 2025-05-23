import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-saving-throws',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './saving-throws.component.html',
  styleUrl: './saving-throws.component.scss',
})
export class SavingThrowsComponent {
  @Input() savingThrows: {
    [key: string]: { num: number; proficiency: boolean };
  } = {};

  @Output() update = new EventEmitter();

  isModalOpen: boolean = false;

  updateStat() {
    this.update.emit(this.savingThrows);
  }
}
