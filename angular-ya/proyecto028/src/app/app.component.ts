import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto028';
  columnas: string[] = ['codigo', 'descripcion', 'precio' ];

  datos: Articulo[] = [];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit () {
    for (let i=1; i<=100; i++) {
      this.datos.push({
        codigo: i,
        descripcion: `Articulo ${i}`,
        precio: Math.trunc(Math.random() * 1000)
      });
    }
    this.dataSource =  new MatTableDataSource<Articulo>(this.datos);
    this.dataSource.paginator = this.paginator;
  }
}

export class Articulo {
  constructor(
    public codigo: number,
    public descripcion: string,
    public precio: number
  ) {}
}
