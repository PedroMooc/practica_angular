import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoarticulosComponent } from "./listadoarticulos/listadoarticulos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoarticulosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto008';
  articulos = [
    {codigo: 1, descripcion: 'Articulo 1', precio: 100},
    {codigo: 2, descripcion: 'Articulo 2', precio: 200},
    {codigo: 3, descripcion: 'Articulo 3', precio: 300},
    {codigo: 4, descripcion: 'Articulo 4', precio: 400},
    {codigo: 5, descripcion: 'Articulo 5', precio: 500}
  ];
}
