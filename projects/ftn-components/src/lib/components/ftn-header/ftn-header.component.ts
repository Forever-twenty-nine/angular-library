import { Component, input } from '@angular/core';

@Component({
  selector: 'ftn-header',
  standalone: true,
  imports: [],
  templateUrl: './ftn-header.component.html',
  styleUrl: './ftn-header.component.scss'
})
export class FtnHeaderComponent {
  altImage = input<string>("Imagen del logo de la empresa");
  srcImage = input<string>("srcImage");
  buttonCtaText = input<string>("Button CTA");
}
