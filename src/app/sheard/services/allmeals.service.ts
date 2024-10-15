import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllmealsService {

  private readonly _HttpClient = inject(HttpClient)

  gitALlMeals(): Observable<any> {
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  }

  gitMealByName(mealName: string): Observable<any> {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealName}`)
  }

  gitMealById(id: string): Observable<any> {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

  gitAllArea(counrtyName: string): Observable<any> {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${counrtyName}`)
  }



}
