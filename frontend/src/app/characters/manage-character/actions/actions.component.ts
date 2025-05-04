import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-actions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  actions: any[] = [];
  isModalOpen = false;

  newAction = {
    Name: '',
    DmgType: '',
    Effects: '',
    Proficiency: false,
    NumDice: 1,
    DieType: 4,
  };

  dmgTypes = [
    'Bludgeoning',
    'Piercing',
    'Slashing',
    'Fire',
    'Cold',
    'Lightning',
    'Acid',
    'Poison',
    'Psychic',
    'Necrotic',
    'Radiant',
    'Force',
    'Thunder',
  ];

  effects = [
    'None',
    'Stun',
    'Knockback',
    'Burn',
    'Freeze',
    'Poison',
    'Blind',
    'Charm',
  ];

  dieTypes = [4, 6, 8, 10, 12, 20];

  openModal() {
    this.isModalOpen = true;
    this.newAction = {
      Name: '',
      DmgType: this.dmgTypes[0],
      Effects: this.effects[0],
      Proficiency: false,
      NumDice: 1,
      DieType: 4,
    };
    console.log(this.newAction);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  createAction() {
    if (
      this.newAction.Name &&
      this.newAction.DmgType &&
      this.newAction.NumDice &&
      this.newAction.DieType
    ) {
      const dmg = `${this.newAction.NumDice}d${this.newAction.DieType}`;
      this.actions.push({ ...this.newAction, Dmg: dmg });
      this.closeModal();
    } else {
      alert('Please fill out all required fields.');
    }
  }

  removeAction(action: any) {
    this.actions = this.actions.filter((a) => a !== action);
  }
}
