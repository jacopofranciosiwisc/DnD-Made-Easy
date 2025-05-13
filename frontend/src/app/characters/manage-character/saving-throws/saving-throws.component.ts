import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dnd-saving-throws',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saving-throws.component.html',
  styleUrl: './saving-throws.component.scss',
})
export class SavingThrowsComponent implements OnInit {
  @Input() savingThrows: { [key: string]: number } = {};

  ngOnInit() {
    console.log(this.savingThrows);
  }
}
