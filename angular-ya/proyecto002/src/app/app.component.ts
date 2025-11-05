import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    DecimalPipe,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto002';
  nuevoArticulo: NuevoArticulo = {
    codigo: '',
    precio: 0,
    descripcion: ''
  };

  articulos: NuevoArticulo[] = [
    { codigo: 'A001', descripcion: 'Artículo 1', precio: 10.5 },
    { codigo: 'A002', descripcion: 'Artículo 2', precio: 20.0 },
    { codigo: 'A003', descripcion: 'Artículo 3', precio: 15.75 }
  ];

  borrar(codigo: string) {
    console.log('borrar:', { codigo });
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo === codigo) {
        this.articulos.splice(i, 1);
        break;
      }
    }
  }


  seleccionar(codigo: string) {
    console.log('seleccionar:', { codigo });
    const articulo = this.articulos.find(a => a.codigo === codigo);
    if (articulo) {
      this.nuevoArticulo = { ...articulo };
    }
  }
  agregar(): void {
    if (this.nuevoArticulo.codigo && this.nuevoArticulo.descripcion) {
      this.articulos.push({ ...this.nuevoArticulo });
      this.nuevoArticulo = { codigo: '', descripcion: '', precio: 0 };
    }else{
      alert('Debe completar todos los campos del nuevo artículo.');
    }
  }
  modificar(): void {
    const ariculoIndex = this.articulos.findIndex(a => a.codigo === this.nuevoArticulo.codigo);
    if (ariculoIndex !== -1) {
      this.articulos[ariculoIndex] = { ...this.nuevoArticulo };
      this.nuevoArticulo = { codigo: '', descripcion: '', precio: 0 };
    } else {
      alert('El artículo a modificar no existe.');
    }
  }
}
interface NuevoArticulo {
    codigo: string;
    precio: number;
    descripcion: string;
  }
