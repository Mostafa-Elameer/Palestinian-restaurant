import { Component, inject } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { AllmealsService } from '../../../sheard/services/allmeals.service';
import { ICategories } from '../../../sheard/interfaces/Icategories';
import { OnemealComponent } from "../onemeal/onemeal.component";
import { IoneMeal } from '../../../sheard/interfaces/IOneMeal';

@Component({
  selector: 'app-eatallmeals',
  standalone: true,
  imports: [SliderComponent, OnemealComponent],
  templateUrl: './eatallmeals.component.html',
  styleUrl: './eatallmeals.component.scss'
})
export class EatallmealsComponent {


  private readonly _AllmealsService = inject(AllmealsService)
  _allCategories: ICategories[] = []
  _oneMeal: IoneMeal[] = []
  ngOnInit(): void {

    this._AllmealsService.gitALlMeals().subscribe({
      next: (res) => {
        this._allCategories = res.categories
        console.log(this._allCategories);
      }
    })
  }


  mealName(Meal: string) {
    console.log(Meal);
    this._AllmealsService.gitMealByName(Meal).subscribe({
      next: (res) => {
        console.log(res);
        this._oneMeal = res.meals
      }
    })
  }
}
