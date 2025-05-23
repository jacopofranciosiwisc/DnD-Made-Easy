import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-notebook',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.scss',
})
export class NotebookComponent {
  @Output() update = new EventEmitter();
  activeTab: string = 'notes';
  notes: string = '';
  backstory: string = '';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  updateNotebook(event: any, tab: any) {
    tab = event.target.value;
    this.update.emit({ notes: this.notes, backstory: this.backstory });
  }
}
