import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto021';
  valor1!: number;
  valor2!: number;
  resultado!: number;

  operacionSeleccionada: string = 'sumar';

  tipoOperaciones: string[] = ['sumar', 'restar', 'multiplicar', 'dividir'];

  operar(){
    switch(this.operacionSeleccionada){
      case 'sumar':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'restar':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicar':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'dividir':
        this.resultado = this.valor1 / this.valor2;
        break;
    }
  }
}
