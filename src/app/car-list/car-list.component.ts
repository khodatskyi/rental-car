import { Component, OnInit  } from '@angular/core';
import { MyDataService } from '../my-data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',
})
export class CarListComponent implements OnInit {
  myDataArray: any[] = [];
  myDateCheckedArray: any[] = [];
  myFilterArray: any[] = [];
  currentFilter: string | null = null;

  constructor(private myDataService: MyDataService, private router: Router) {}

  ngOnInit(): void {
    this.filterArrayByDateAndCity()
  }

  showCarDetails(carId: number): void {
    this.router.navigate(['cars', carId]);
    console.log('Перенаправляем на страницу конкретной машины');
    
  }

  toggleFilter(filter: string): void {
    if (this.currentFilter === filter) {
      this.filterArrayByDateAndCity()


      this.currentFilter = null;
    } else {
      this.currentFilter = filter;
      this.filterArrayByDateAndCity()
      this.myDataArray = this.myDataArray.filter((car) => car.type == filter);

    }
  }

  filterArrayByDateAndCity() {
    this.myDataArray = this.myDataService.getMyDataArray();
    
    // Проверяем доступность машин
    this.myDateCheckedArray = this.myDataArray.filter((car) => {
      if (car.availability) {
        return car.availability.some((obj:any) => {
          return obj.startTime > this.myDataService.userMaxEndDate || obj.endTime < this.myDataService.userMinEndDate
        });
      } else {
        return true;
      }
    });

    this.myDataArray = this.myDateCheckedArray.filter(car =>  car.city.toLowerCase() === this.myDataService.city.trim().toLowerCase());
      
    console.log(this.myDataService.city);
    
  }
}
