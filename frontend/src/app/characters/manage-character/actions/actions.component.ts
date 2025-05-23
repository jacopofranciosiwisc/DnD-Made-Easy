import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-actions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  @Output() update = new EventEmitter();
  actions: any[] = [];

  isModalOpen = false;
  damageModalOpen = false;
  damageModalActionIndex: number | null = null;

  newAction = {
    Name: '',
    DmgType: '',
    Effects: '',
    Proficiency: false,
    damageDies: [{ numDice: 1, diceType: 4 }],
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

  updateCharacter() {
    this.update.emit(this.actions);
  }

  openModal() {
    this.isModalOpen = true;
    this.newAction = {
      Name: '',
      DmgType: this.dmgTypes[0],
      Effects: this.effects[0],
      Proficiency: false,
      damageDies: [{ numDice: 1, diceType: 4 }],
    };
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addDamageDie() {
    this.newAction.damageDies.push({ numDice: 1, diceType: 4 });
  }

  createAction() {
    if (this.newAction.Name) {
      this.actions.push({ ...this.newAction });
      this.closeModal();
      this.updateCharacter();
    } else {
      alert('Please fill out all required fields.');
    }
  }

  removeAction(action: any) {
    this.actions = this.actions.filter((a) => a !== action);
    this.updateCharacter();
  }

  openDamageModal(index: number): void {
    this.damageModalActionIndex = index;
    this.damageModalOpen = true;
  }

  closeDamageModal(): void {
    this.damageModalOpen = false;
    this.damageModalActionIndex = null;
  }
}
