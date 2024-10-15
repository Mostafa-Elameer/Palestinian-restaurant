import { Component, inject } from '@angular/core';
import { WishlistService } from '../../../sheard/services/wishlist.service';
import { AllmealsService } from '../../../sheard/services/allmeals.service';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {


  allidwishlist: any[] = []
  private readonly _WishlistService = inject(WishlistService)


  allmel: any[] = []

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._WishlistService.getallmealswishlist().subscribe({
      next: (res) => {
        console.log(res);
        this.allmel = res

      }
    })
  }









}







