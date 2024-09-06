import { Component, Input } from '@angular/core';

@Component({
  selector: 'ftn-button',
  standalone: true,
  imports: [],
  templateUrl: './ftn-button.component.html',
  styleUrls: ['./ftn-button.component.scss']
})
export class FtnButtonComponent {
  @Input() buttonType: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() label: string = '';

  getClasses(): string[] {
    return ['btn', this.buttonType];
  }
}
