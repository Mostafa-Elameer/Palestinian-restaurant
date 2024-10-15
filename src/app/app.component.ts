import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagelayoutComponent } from "./layout/pagelayout/pagelayout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PagelayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'restaurants';
}
