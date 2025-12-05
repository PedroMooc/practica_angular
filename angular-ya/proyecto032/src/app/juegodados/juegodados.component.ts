import { Component, OnInit } from '@angular/core';
import { DadoComponent } from "../dado/dado.component";

@Component({
  selector: 'app-juegodados',
  standalone: true,
  imports: [DadoComponent],
  templateUrl: './juegodados.component.html',
  styleUrl: './juegodados.component.css'
})
export class JuegodadosComponent implements OnInit {
  valor1: number;
  valor2: number;
  valor3: number;
  resultado!: string;
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  retornarAleatorio(): number {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1 === this.valor2 && this.valor2 === this.valor3) {
      this.resultado = '¡Ganó!';
    } else {
      this.resultado = 'Inténtalo de nuevo.';
    }
  }

  ngOnInit(){

  }
}
