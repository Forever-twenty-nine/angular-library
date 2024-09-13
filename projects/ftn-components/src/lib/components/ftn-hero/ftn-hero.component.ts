import { Component, Input } from '@angular/core';
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

}
