import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishListAPI: string = "http://localhost:3000/"
  allmealwishlist: string = "http://localhost:3000/"

  private readonly _HttpClient = inject(HttpClient)

  getAllId(): Observable<any> {
    return this._HttpClient.get(this.wishListAPI)
  }


  setid(data: object): Observable<any> {
    return this._HttpClient.post(`${this.wishListAPI}myWishList`, JSON.stringify(data))
  }

  setmealwishlist(data: string | any): Observable<any> {
    return this._HttpClient.post(`${this.wishListAPI}allmeals`, data)
  }

  getallmealswishlist(): Observable<any> {
    return this._HttpClient.get(`${this.wishListAPI}allmeals`)
  }

}
