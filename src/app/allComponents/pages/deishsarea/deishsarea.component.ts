import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AllmealsService } from '../../../sheard/services/allmeals.service';
import { IoneMeal } from '../../../sheard/interfaces/IOneMeal';

@Component({
  selector: 'app-deishsarea',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './deishsarea.component.html',
  styleUrl: './deishsarea.component.scss'
})
export class DeishsareaComponent {

  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _AllmealsService = inject(AllmealsService)


  _areaMeal: IoneMeal[] = []

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p) => {
      let counrtyName = (p.get('counrtName'))

      this._AllmealsService.gitAllArea(counrtyName!).subscribe({
        next: (res) => {
          console.log(res);
          this._areaMeal = res.meals
        }
      })
    })
  }


  mealId(id: string) {
    console.log(id);

  }
}
