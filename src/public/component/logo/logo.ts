import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [CommonModule],
  templateUrl: './logo.html',
  styleUrl: './logo.css'
})
export class Logo {
  @Input() variableLogo: String = ''
  @Input() variableTitle: String = ''
}
