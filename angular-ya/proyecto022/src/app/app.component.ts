import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto022';
  valor1!: number;
  valor2!: number;
  resultado!: string;
  opcion1: boolean = false;
  opcion2: boolean = false;
  opcion3: boolean = false;
  opcion4: boolean = false;

  operar() {
    this.resultado = '';
    if (this.opcion1) {
      let ope = this.valor1 + this.valor2;
      this.resultado += `Suma: ${ope}\n`;
    }
    if (this.opcion2) {
      let ope = this.valor1 - this.valor2;
      this.resultado += `Resta: ${ope}\n`;
    }
    if (this.opcion3) {
      let ope = this.valor1 * this.valor2;
      this.resultado += `Multiplicación: ${ope}\n`;
    }
    if (this.opcion4) {
      if (this.valor2 !== 0) {
        let ope = this.valor1 / this.valor2;
        this.resultado += `División: ${ope}\n`;
      } else {
        this.resultado += `División: Error (división por cero)\n`;
      }
    }
  }
}
