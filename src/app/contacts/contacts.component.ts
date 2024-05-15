import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
constructor(private router: Router){}

  backToCarList() {
    this.router.navigate(['/cars']);
    console.log('Перенаправляем на страницу с машинами');
  }
}
