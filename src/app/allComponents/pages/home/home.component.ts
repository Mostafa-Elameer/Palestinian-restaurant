import { Component, inject } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { OffersComponent } from "../offers/offers.component";
import { OnemealComponent } from "../onemeal/onemeal.component";
import { AllmealsService } from '../../../sheard/services/allmeals.service';
import { IoneMeal } from '../../../sheard/interfaces/IOneMeal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, OffersComponent, OnemealComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})



export class HomeComponent {


  private readonly _AllmealsService = inject(AllmealsService)
  _oneMeal: IoneMeal[] = []

  ngOnInit(): void {
    this._AllmealsService.gitMealByName('pasta').subscribe({
      next: (res) => {
        console.log(res.meals);
        this._oneMeal = res.meals
      }
    })
  }
}
