import { inject, Pipe, PipeTransform, signal, WritableSignal } from '@angular/core';
import { SearchService } from '../services/search.service';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  private readonly _SearchService = inject(SearchService)

  allmeal: any[] = []

  transform(meal: any[], letter: string): any[] {

    this._SearchService.searchByLetter(letter).subscribe({
      next: (res) => {
        this.allmeal = res.meals
      }
    })

    return meal = this.allmeal
  }






}
