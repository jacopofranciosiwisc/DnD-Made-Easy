import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { AbilityScoresComponent } from './ability-scores/ability-scores.component';
import { SkillsComponent } from './skills/skills.component';
import { ActionsComponent } from './actions/actions.component';
import { InventoryComponent } from './inventory/inventory.component';
import { NotebookComponent } from './notebook/notebook.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dnd-manage-character',
  standalone: true,
  imports: [
    ProfileComponent,
    AbilityScoresComponent,
    SkillsComponent,
    ActionsComponent,
    InventoryComponent,
    NotebookComponent,
  ],
  templateUrl: './manage-character.component.html',
  styleUrl: './manage-character.component.scss',
})
export class ManageCharacterComponent implements OnInit {
  constructor(private http: HttpClient) {}
  defaultCharacter: any = {};
  modifiedCharacter: any = {};

  ngOnInit() {
    this.http.get('assets/character.json').subscribe((data) => {
      this.defaultCharacter = data;
      this.modifiedCharacter = JSON.parse(
        JSON.stringify(this.defaultCharacter)
      );
    });
  }
}
