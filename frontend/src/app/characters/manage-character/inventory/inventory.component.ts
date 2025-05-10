import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  @Output() update = new EventEmitter();

  gold: number = 0;
  items: any[] = [];
  isAddItemModalOpen = false;
  isDescriptionModalOpen = false;
  newItem = { name: '', description: '', quantity: 1 };
  selectedItem: any = null;

  openAddItemModal() {
    this.isAddItemModalOpen = true;
    this.newItem = { name: '', description: '', quantity: 1 };
  }

  closeAddItemModal() {
    this.isAddItemModalOpen = false;
  }

  addItem() {
    if (this.newItem.name && this.newItem.description) {
      this.items.push({ ...this.newItem });
      this.closeAddItemModal();
      this.emitInventory();
    } else {
      alert('Please fill out all fields.');
    }
  }

  updateGold(event: any) {
    this.gold = parseInt(event.target.value);
    if (Number.isNaN(this.gold)) this.gold = 0;
    this.emitInventory();
  }

  openDescriptionModal(item: any) {
    this.selectedItem = item;
    this.isDescriptionModalOpen = true;
  }

  closeDescriptionModal() {
    this.isDescriptionModalOpen = false;
  }

  removeItem(item: any) {
    this.items = this.items.filter((i) => i !== item);
    this.emitInventory();
  }

  emitInventory() {
    this.update.emit({ gold: this.gold, items: this.items });
  }
}
