import { Routes, RouterModule  } from '@angular/router';
import { SecondWindowComponent } from './second-window/second-window.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    { path: '', component: MainWindowComponent },
    { path: 'cars', component: SecondWindowComponent },
    { path: 'cars/:id', component: CarDetailsComponent },
    { path: 'contacts', component: ContactsComponent },
  ];
