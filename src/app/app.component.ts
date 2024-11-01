import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DasboardComponent } from "./components/dasboard/dasboard.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DasboardComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'secure-development-certification';
  }
