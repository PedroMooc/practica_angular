import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    MatInputModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto030';
  columnas: string[] = ['codigo', 'nombre', 'precio'];

  datos: Articulos[] = [
    { codigo: 1, descripcion: 'papas', precio: 10.5 },
    { codigo: 2, descripcion: 'manzanas', precio: 20.0 },
    { codigo: 3, descripcion: 'naranjas', precio: 15.75 },
  ];

  dataSource: any;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

export class Articulos {
  constructor(
    public codigo: number,
    public descripcion: string,
    public precio: number
  ) {}
}
