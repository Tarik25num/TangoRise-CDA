import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-cgu-confirmation',
  imports: [FormsModule],
  templateUrl: './cgu-confirmation.html',
  styleUrl: './cgu-confirmation.css',
  standalone: true
})
export class CguConfirmation {
  isChecked = false;

  @Output() confirmed = new EventEmitter<boolean>();

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.confirmed.emit(this.isChecked);
  }
}
