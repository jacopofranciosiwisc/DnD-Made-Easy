import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-notebook',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.scss',
})
export class NotebookComponent {
  activeTab: string = 'notes';
  notes: string = '';
  backstory: string = '';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
