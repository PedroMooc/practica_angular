import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Pedro Morales';
  edad = 30;
  email = 'pedro@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;
  sitio = 'www.google.com';
  contador = 1;

  esActivo() {
    if (this.activo) {
      return 'Trabajador Activo';
    }else {
      return 'Trabajador Inactivo';
    }
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++) {
      suma += this.sueldos[x];
    }
    return suma;
  }

  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}
