// dropdown.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css'],
})
export class DropdownComponent {
  @Input() items: string[] = [];
  @Input() control!: AbstractControl;
  @Output() itemSelected = new EventEmitter<string>();

  isOpen = false;
  selectedValue: string | null = null;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: string) {
    this.selectedValue = item;
    this.control.setValue(item);
    this.itemSelected.emit(item);
    this.isOpen = false;
  }
}
