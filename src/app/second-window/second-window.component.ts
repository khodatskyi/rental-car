import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CarListComponent } from '../car-list/car-list.component';

@Component({
  selector: 'app-second-window',
  standalone: true,
  imports: [NavBarComponent, CarListComponent],
  templateUrl: './second-window.component.html',
})
export class SecondWindowComponent {
  name: string;
  
  constructor() {
    this.name = 'Second window';
  }
}
