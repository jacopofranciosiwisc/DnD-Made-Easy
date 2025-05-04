import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dnd-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
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
    } else {
      alert('Please fill out all fields.');
    }
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
  }
}
