import { SearchService } from './../../../sheard/services/search.service';
import { Component, Input, input, inject } from '@angular/core';
import { ICategories } from '../../../sheard/interfaces/Icategories';
import { IoneMeal } from '../../../sheard/interfaces/IOneMeal';
import { RouterLink } from '@angular/router';
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

  private readonly _AllmealsService = inject(AllmealsService)




}
