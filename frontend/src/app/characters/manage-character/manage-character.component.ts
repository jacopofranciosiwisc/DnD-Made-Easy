import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { SkillsComponent } from './skills/skills.component';
import { ActionsComponent } from './actions/actions.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NotebookComponent } from './notebook/notebook.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';

interface Profile {
  name: string;
  race: string;
  class: string;
  age: string;
  level: number;
  hp: number;
  ac: number;
  initiative: number;
  profilePicture: string;
}

@Component({
  selector: 'dnd-manage-character',
  standalone: true,
  imports: [
    ProfileComponent,
    AbilityScoresComponent,
    SavingThrowsComponent,
    SkillsComponent,
    ActionsComponent,
    InventoryComponent,
    NotebookComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './manage-character.component.html',
  styleUrl: './manage-character.component.scss',
})
export class ManageCharacterComponent implements OnInit {
  defaultCharacter: any = {};
  modifiedCharacter: any = {};
  // Show the profile modal if profile is not yet created or when editing
  showProfileModal: boolean = true;

  // Hold the profile data locally
  profile: Profile = {
    name: '',
    race: '',
    class: '',
    age: '',
    level: 0,
    hp: 1,
    ac: 1,
    initiative: 1,
    profilePicture: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/character.json').subscribe((data) => {
      this.defaultCharacter = data;
      // Override profile from file if it exists:
      if (this.defaultCharacter.profile) {
        this.profile = this.defaultCharacter.profile;
        // Hide modal if profile is already set
        if (this.profile.name) {
          this.showProfileModal = false;
        }
      }
      this.modifiedCharacter = JSON.parse(
        JSON.stringify(this.defaultCharacter)
      );
    });
  }

  updateCharacter(data: any, key: string) {
    this.modifiedCharacter[key] = data;
    console.log('Character after the update: ', this.modifiedCharacter);
  }

  saveCharacter() {
    console.log('API call to save character');
  }

  updateProfile() {
    this.modifiedCharacter.profile = { ...this.profile };
    this.showProfileModal = false;
  }

  editProfile() {
    // Show modal again for editing profile
    this.showProfileModal = true;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.profile.profilePicture = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
