import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  gitid: string[] = []

  private readonly _HttpClient = inject(HttpClient)

  searchByName(name: string): Observable<any> {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  }

  searchByLetter(letter: string): Observable<any> {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  }


}
