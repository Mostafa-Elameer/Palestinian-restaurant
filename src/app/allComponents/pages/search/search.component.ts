import { SearchService } from './../../../sheard/services/search.service';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AllmealsService } from '../../../sheard/services/allmeals.service';
import { SearchPipe } from '../../../sheard/pipes/search.pipe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, SearchPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  Letter: string = ''
  name: string = ''

  _allmeals: any[] = []


}

