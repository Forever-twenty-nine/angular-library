import { Component, input } from '@angular/core';

@Component({
  selector: 'ftn-header',
  standalone: true,
  imports: [],
  templateUrl: './ftn-header.component.html',
  styleUrl: './ftn-header.component.scss'
})
export class FtnHeaderComponent {
  title = input<string>("titulo");
  srcImage = input<string>("srcImage");
}
