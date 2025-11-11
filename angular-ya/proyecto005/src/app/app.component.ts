import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CronometroComponent } from './cronometro/cronometro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CronometroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensaje = '';

  actualizar(t: number) {
    this.mensaje = `¡El cronómetro ha alcanzado el múltiplo de 10: ${t} segundos!`;
  }
}
