import { Component } from '@angular/core';
import { NavbarComponent } from "../../allComponents/additions/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../allComponents/additions/footer/footer.component";

@Component({
  selector: 'app-pagelayout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './pagelayout.component.html',
  styleUrl: './pagelayout.component.scss'
})
export class PagelayoutComponent {

}
