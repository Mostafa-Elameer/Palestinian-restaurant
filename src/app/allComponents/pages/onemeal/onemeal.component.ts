import { SearchService } from './../../../sheard/services/search.service';
import { Component, Input, input, inject } from '@angular/core';
import { ICategories } from '../../../sheard/interfaces/Icategories';
import { IoneMeal } from '../../../sheard/interfaces/IOneMeal';
import { RouterLink } from '@angular/router';
import { WishlistService } from '../../../sheard/services/wishlist.service';
import { AllmealsService } from '../../../sheard/services/allmeals.service';
import { IMealDetils } from '../../../sheard/interfaces/mealDetils';
import { Iwishlist } from '../../../sheard/interfaces/Iwishlistit';

@Component({
  selector: 'app-onemeal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './onemeal.component.html',
  styleUrl: './onemeal.component.scss'
})
export class OnemealComponent {


  @Input() _oneMeal: IoneMeal[] = []
  @Input() _allCategories: ICategories[] = []


  id: string = ''

  private readonly mywishlist = inject(WishlistService)
  private readonly _AllmealsService = inject(AllmealsService)




  meal: Iwishlist = {} as Iwishlist

  mealId(id: string) {

    let data = {
      "id": id
    }

    this.mywishlist.setid(data).subscribe({
      next: (res) => {
        this.id = res.id
        console.log(id);

        this._AllmealsService.gitMealById(id).subscribe({
          next: (res) => {
            console.log(res.meals);
            this.meal = res.meals

            this.mywishlist.setmealwishlist(this.meal).subscribe({
              next: (res) => {
                console.log(res);
              }
            })

          }
        })



      }
    })
  }


}
