import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarrademenuComponent } from "./barrademenu/barrademenu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BarrademenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto039';
  opciones = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3',
    'Opcion 4'
  ];

  presion(op: number) {
    alert("Opcion presionada: " + op);
  }
}
