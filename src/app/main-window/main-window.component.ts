import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  VanillaTilt  from 'vanilla-tilt';
import { MyDataService } from '../my-data.service';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-main-window',
  standalone: true,
  imports: [FormsModule, CalendarModule],
  templateUrl: './main-window.component.html',
  styleUrl: './main-window.component.css',
})
export class MainWindowComponent implements OnInit {
  constructor(private router: Router, private myDataService: MyDataService) {}

  title = 'Car Rental';
  startDate = ''; // Перменная нужна для коректного выбора дат
  endDate = ''; // Перменная нужна для коректного выбора дат
  minEndDate: any = ''; // Перменная нужна для коректного выбора дат
  maxEndDate: any = ''; // Перменная нужна для коректного выбора дат
  city: string = '';
  currentDate: Date = new Date();
  clickOnCityWithoutMinDate: boolean = false;
  clickOnCityWithoutMaxDate: boolean = false;

  navigateToCars(event: MouseEvent) {
    if (
      this.clickOnCityWithoutMinDate == false ||
      this.clickOnCityWithoutMaxDate == false
    ) {
      alert('No date has been selected.');
    } else {
      this.router.navigate(['cars']);
      this.city = (event.target as HTMLElement).textContent!;
      this.myDataService.city = this.city;
      this.myDataService.timeDifference = this.maxEndDate.getTime() - this.minEndDate.getTime()
      this.myDataService.daysDifference = this.myDataService.timeDifference / (1000 * 60 * 60 * 24);
      console.log(this.myDataService.city);
      console.log(this.myDataService.daysDifference);
    }
  }

  ngOnInit() {
    VanillaTilt.init(document.querySelectorAll('.vanillaTilt') as any, {
      reverse: true,
      glare: true,
      'max-glare': 0.3,
      speed: 1000,
      scale: 1.05,
    });
  }

  updateMinEndDate(event: any) {
    this.clickOnCityWithoutMinDate = true;
    this.minEndDate = event;
    this.myDataService.userMinEndDate = this.minEndDate.getTime();
    console.log('Мы изменили первый инпут');
    console.log(this.myDataService.userMinEndDate);
  }
  updateMaxEndDate(event: any) {
    this.clickOnCityWithoutMaxDate = true;
    this.maxEndDate = event;
    this.myDataService.userMaxEndDate = this.maxEndDate.getTime();
    console.log('Мы изменили второй инпут');
    console.log(this.myDataService.userMaxEndDate);

  }
}
