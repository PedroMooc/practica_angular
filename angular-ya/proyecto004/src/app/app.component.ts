import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./dado/dado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valor1: number;
  valor2: number;
  valor3: number;
  contadorDeTiros: number = 0;
  resultado: string = "";
  estadoBoton: string = "";
  constructor() {
    this.valor1 = 1;
    this.valor2 = 1;
    this.valor3 = 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    this.contadorDeTiros += 1;
    if (this.valor1 === this.valor2 && this.valor2 === this.valor3) {
      this.resultado = "¡Ha salido un triple!";
      this.estadoBoton = "disabled";
    } else if (this.valor1 === this.valor2 || this.valor2 === this.valor3 || this.valor1 === this.valor3) {
      this.resultado = "¡Ha salido un doble!";
    } else {
      this.resultado = "¡Perdió!";
    }
  }

  retornarAleatorio(): number {
    return Math.trunc(Math.random() * 6) + 1;
  }
}
