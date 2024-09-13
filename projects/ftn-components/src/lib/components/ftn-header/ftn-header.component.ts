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

  @Input() button: boolean = false;
  
  altImage = input<string>("Imagen del logo de la empresa");
  srcImage = input<string>("srcImage");
}
