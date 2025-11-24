import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, JsonPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    SlicePipe,
    JsonPipe,
    DatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto014';
  nombre = 'Juan Carlos';
  saldo = 1000.50;
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  articulos = [
    {codigo: 1, descripcion: 'Papas', precio: 10.00},
    {codigo: 2, descripcion: 'Manzana', precio: 20.00},
  ];
  fechaActual = new Date();
}
