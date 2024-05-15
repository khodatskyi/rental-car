import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyDataService } from '../my-data.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',

})
export class NavBarComponent {
  constructor(private router: Router, private myDataService: MyDataService,) {}

  city = this.myDataService.city


  navigateToMain() {
    this.router.navigate(['/']); 
    console.log('Перенаправляем на главную страницу с выбором дат и города');
  }

  navigateToContacts() {
    this.router.navigate(['contacts']);
    console.log('Перенаправляем на страницу с контактами');
  }
}
