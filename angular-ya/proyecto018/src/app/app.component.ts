import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from "./barra-lateral/barra-lateral.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    BarraLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto018';
}
