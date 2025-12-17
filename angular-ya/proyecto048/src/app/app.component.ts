import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextovozDirective } from "./textovoz.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextovozDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto048';
}
