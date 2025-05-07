import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dnd-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  @Input() profile: any = {};
  @Output() edit = new EventEmitter();
  @Output() saveCharacter = new EventEmitter();

  ngOnInit(): void {}

  constructor(private router: Router) {}

  editProfile() {
    this.edit.emit();
  }

  handleSaveCharacter() {
    this.saveCharacter.emit();
  }

  goBack() {
    this.router.navigate(['characters']);
  }
}
