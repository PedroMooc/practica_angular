import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto025';
  valor1!: number;
  valor2!: number;
  resultado!: string;

  opcion1 = false;
  opcion2 = false;
  opcion3 = false;
  opcion4 = false;

  operar() {
    this.resultado = '';
    if (this.opcion1) {
      let operacion = this.valor1 + this.valor2;
      this.resultado += `La suma es: ${operacion} \n`;
    }
    if (this.opcion2) {
      let operacion = this.valor1 - this.valor2;
      this.resultado += `La resta es: ${operacion} \n`;
    }
    if (this.opcion3) {
      let operacion = this.valor1 * this.valor2;
      this.resultado += `La multiplicación es: ${operacion} \n`;
    }
    if (this.opcion4) {
      if (this.valor2 !== 0) {
        let operacion = this.valor1 / this.valor2;
        this.resultado += `La división es: ${operacion} \n`;
      } else {
        this.resultado += `Error: División por cero no es permitida. \n`;
      }
    }
  }
}
