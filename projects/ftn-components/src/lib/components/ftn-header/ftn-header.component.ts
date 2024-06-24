import { Component, input } from '@angular/core';

@Component({
  selector: 'ftn-header',
  standalone: true,
  imports: [],
  templateUrl: './ftn-header.component.html',
  styles: ``
})
export class FtnHeaderComponent {
  title = input<string>("titulo");
  srcImage = input<string>("srcImage");
}
