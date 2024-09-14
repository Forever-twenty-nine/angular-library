import { Component, input } from '@angular/core';

@Component({
  selector: 'ftn-brands',
  standalone: true,
  imports: [],
  templateUrl: './ftn-brands.component.html',
  styleUrl: './ftn-brands.component.scss' 
})
export class FtnBrandsComponent {

  imgSrc = input<string>("#");
  imgAlt = input<string>("Image logo");

}