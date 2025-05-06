import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    console.log(this.profile);
  }

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['characters']);
  }

  saveCharacter() {
    console.log('To implement');
  }
}
