import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto029';
  columnas: string[] = ['codigo', 'descripcion', 'precio'];

  datos: Articulo[] = [];
  datosSource: any;

  @ViewChild(MatSortModule, {static: true}) sort!: MatSort;

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.datos.push(new Articulo(
        'A' + i,
        'Articulo ' + i,
        Math.trunc(Math.random() * 1000) / 100
      ));
    }
    this.datosSource = new MatTableDataSource<Articulo>(this.datos);
    this.datosSource.sort = this.sort;
  }
}

export class Articulo {
  constructor(
    public codigo: string,
    public descripcion: string,
    public precio: number
  ) {}
}
