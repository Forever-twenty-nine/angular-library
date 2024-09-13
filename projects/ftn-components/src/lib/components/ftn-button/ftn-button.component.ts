import { Component, Input } from '@angular/core';

@Component({
  selector: 'ftn-button',
  standalone: true,
  imports: [],
  templateUrl: './ftn-button.component.html',
  styleUrls: ['./ftn-button.component.scss']
})
export class FtnButtonComponent {
  @Input() design: '1' | '2' | '3' | '4' = '1';
  @Input() label: string = '';
}
