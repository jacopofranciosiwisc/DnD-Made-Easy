import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit {
  @Input() skills: { [key: string]: number } = {};
  proficient: { [key: string]: boolean } = {};
  isModalOpen: boolean = false;

  ngOnInit() {}
}
