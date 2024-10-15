import { HtmlTagDefinition } from '@angular/compiler';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  dark() {
    console.log("dark");
    const mode = document.querySelector('html')
  }

}
