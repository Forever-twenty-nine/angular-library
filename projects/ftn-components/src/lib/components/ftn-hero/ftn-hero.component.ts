import { Component, Input, input, Output, output } from '@angular/core';
import { FtnButtonComponent } from "../ftn-button/ftn-button.component";

@Component({
  selector: 'ftn-hero',
  standalone: true,
  imports: [FtnButtonComponent],
  templateUrl: './ftn-hero.component.html',
  styleUrl: './ftn-hero.component.scss'
})
export class FtnHeroComponent {

  @Input() button: boolean = false;
  @Input() btnText: string = '';

  @Input() tag: boolean = false;
  @Input() tagText: string = 'Add parameter: tagText';

  @Input() title: string = 'Add parameter: title'

  @Input() paragraph: boolean = false;
  @Input() paragraphText: string = 'Add parameter: paragraphText'

  imgSrc = input<string>("#");
  imgAlt = input<string>("Image text default");

}
