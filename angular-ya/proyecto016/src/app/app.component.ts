import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto016';

  articulos: any;

  art = {
    codigo: 0,
    descripcion: '',
    precio: 0
  }

  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this.articulosService.recuperarTodos()
      .subscribe((result: any) => this.articulos = result);
  }

  alta(){
    this.articulosService.alta(this.art)
      .subscribe((result: any) => {
        if (result['resultado']=='OK'){
          alert(result['mensaje']);
          this.recuperarTodos();
        }
      });
  }

  baja(codigo: number){
    this.articulosService.baja(codigo)
      .subscribe((datos: any) => {
        if (datos['resultado']=='OK'){
          alert(datos['mensaje']);
          this.recuperarTodos();
        }
      });
  }

  modificacion(){
    this.articulosService.modificacion(this.art)
      .subscribe((result: any) => {
        if (result['resultado']=='OK'){
          alert(result['mensaje']);
          this.recuperarTodos();
        }
      });
  }

  seleccionar(codigo: number){
    this.articulosService.seleccionar(codigo)
      .subscribe((datos: any) => this.art = datos[0]);
  }
  hayRegistros(){
    return this.articulos && this.articulos.length>0;
  }
}
