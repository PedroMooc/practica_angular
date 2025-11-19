import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./elementos/dado/dado.component";
import { ElementosModule } from './elementos/elementos.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ElementosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto009';
}
