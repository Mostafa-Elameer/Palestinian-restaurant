import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AllmealsService } from '../../../sheard/services/allmeals.service';
import { IMealDetils } from '../../../sheard/interfaces/mealDetils';

@Component({
  selector: 'app-mealdetils',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mealdetils.component.html',
  styleUrl: './mealdetils.component.scss'
})
export class MealdetilsComponent {


  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _AllmealsService = inject(AllmealsService)

  _mealDetils: IMealDetils[] = []
  ngOnInit(): void {


    this._ActivatedRoute.paramMap.subscribe((p) => {
      let id = (p.get("id"));
      this._AllmealsService.gitMealById(id!).subscribe({
        next: (res) => {
          console.log(res.meals)
          this._mealDetils = res.meals
        }
      })



    })

  }

}
