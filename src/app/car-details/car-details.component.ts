import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [NavBarComponent, RouterModule, CommonModule],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css',
})
export class CarDetailsComponent {
  myDataArray: any[] = [];
  car: any;
  currentCarIndex: number = 0;
  animateImage: boolean = false;
  daysForRent = Math.round(this.myDataService.daysDifference);

  constructor(
    private myDataService: MyDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myDataArray = this.myDataService.getMyDataArray();

    this.route.paramMap.subscribe((params) => {
      const carId = params.get('id');
      if (carId !== null) {
        const carIdNumber = +carId;
        this.car = this.myDataArray[carIdNumber];
        console.log(this.myDataArray[carIdNumber]);
      }
    });
  }

  backToCarList() {
    this.router.navigate(['/cars']);
    console.log('Перенаправляем на страницу с машинами');
  }

  get currentImage(): string {
    return this.car.images[this.currentCarIndex];
  }

  prevImage(): void {
    this.currentCarIndex =
      (this.currentCarIndex - 1 + this.car.images.length) %
      this.car.images.length;
    console.log(this.currentCarIndex);
    this.animateImage = true;
    setTimeout(() => (this.animateImage = false), 2000);
  }

  nextImage(): void {
    this.currentCarIndex = (this.currentCarIndex + 1) % this.car.images.length;
    console.log(this.currentCarIndex);
    this.animateImage = true;
    setTimeout(() => (this.animateImage = false), 2000);
  }
}
