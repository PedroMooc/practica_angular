import { Dialog } from '@angular/cdk/dialog';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DialogoarticuloComponent } from './dialogoarticulo/dialogoarticulo.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Articulo } from './articulo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DialogoarticuloComponent,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatTableModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto031';

  columnas: string[] = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Articulo[] = [
    new Articulo(1, 'papas', 10.5),
    new Articulo(2, 'manzanas', 20.0),
    new Articulo(3, 'naranjas', 15.75)
  ];

  ds = new MatTableDataSource<Articulo>(this.datos);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;
  constructor(public dialogo: MatDialog) { }

  abrirDialogo(): void {
    const dialogo1 = this.dialogo.open(DialogoarticuloComponent, {
      data: new Articulo(0, '', 0)
    });

    dialogo1.afterClosed().subscribe((art: Articulo) => {
      if (art != undefined) {
        this.agregar(art);
      }
    });
  }
  borrarFila(cod: number) {
    if (confirm('¿Desea borrar el artículo con código ' + cod + '?')) {
      this.datos.splice(cod,1);
      this.tabla1.renderRows();
    }
  }

  agregar(art: Articulo) {
    this.datos.push(art);
    this.tabla1.renderRows();
  }

}
