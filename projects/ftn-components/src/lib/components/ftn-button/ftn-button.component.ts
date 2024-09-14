import { Component, Input } from '@angular/core';

@Component({
  selector: 'ftn-button',
  standalone: true,
  imports: [],
  templateUrl: './ftn-button.component.html',
  styleUrls: ['./ftn-button.component.scss']
})
export class FtnButtonComponent {
  @Input() btnStyle: '1' | 'cta' | '3' | '4' = '1';
  @Input() btnText: string = 'Add parameter: btnText';
  @Input() btnUrl: string = '#';
  
  
}
