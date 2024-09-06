import { Component, Input } from '@angular/core';

@Component({
  selector: 'ftn-button',
  standalone: true,
  imports: [],
  templateUrl: './ftn-button.component.html',
  styleUrls: ['./ftn-button.component.scss']
})
export class FtnButtonComponent {
  @Input() name: string = "";
  @Input() label: string = '';


}
