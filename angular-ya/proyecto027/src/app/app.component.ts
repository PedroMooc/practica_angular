import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto027';
  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Articulo[] = [new Articulo(1, 'papas', 55),
                       new Articulo(2, 'manzanas', 53),
                       new Articulo(3, 'naranjas', 23)];

  articuloselect: Articulo = new Articulo(0, '', 0);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number){
    if (confirm("¿Borrar el artículo con código " + cod + "?")){
      this.datos.splice(cod,1);
      this.tabla1.renderRows();
    }
  }
  agregar(){
    this.datos.push(new Articulo(this.articuloselect.codigo,
                                 this.articuloselect.descripcion,
                                 this.articuloselect.precio));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo(0, '', 0);
  }

}
export class Articulo {
  constructor(
    public codigo: number,
    public descripcion: string,
    public precio: number
  ){}
}

