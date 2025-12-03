import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto023';
  valor1!: number;
  valor2!: number;
  resultado!: number;

  operaciones = [
    { valor: 'suma', muestraValor: 'Sumar'},
    { valor: 'resta', muestraValor: 'Restar'},
    { valor: 'multiplicacion', muestraValor: 'Multiplicar'},
    { valor: 'division', muestraValor: 'Dividir'}
  ];
  seleccionada: string = this.operaciones[0].valor;

  operar() {
    switch (this.seleccionada) {
      case 'suma':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'resta':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacion':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'division':
        this.resultado = this.valor1 / this.valor2;
        break;
    }
  }
}
