import { Component, Input, input } from '@angular/core';
import { FtnButtonComponent } from '../ftn-button/ftn-button.component';

@Component({
  selector: 'ftn-header',
  standalone: true,
  imports: [FtnButtonComponent],
  templateUrl: './ftn-header.component.html',
  styleUrl: './ftn-header.component.scss'
})
export class FtnHeaderComponent {

  imgSrc = input<string>("#");
  imgAlt = input<string>("Image text default");

  @Input() button: boolean = false;
  @Input() btnText: string = '';
  @Input() btnUrl: string = '';
}
