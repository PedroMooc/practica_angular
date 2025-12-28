import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto055';

  actividad = new FormControl();
  lista!: string[];

  ngOnInit(): void {
    this.lista = [];
    let datos = localStorage.getItem("actividades");
    if(datos != null){
      let arreglo = JSON.parse(datos);
      if(arreglo != null){
        for(let actividad of arreglo){
          this.lista.push(actividad);
        }
      }
    }
  }

  agregar() {
    this.lista.push(this.actividad.value);
    localStorage.setItem('actividades', JSON.stringify(this.lista));
    this.actividad.setValue("");
  }

  borrar(pos: number) {
    this.lista.splice(pos, 1);
    localStorage.clear;
    localStorage.setItem('actividades', JSON.stringify(this.lista));
  }

  borrarTodas() {
    localStorage.clear();
    this.lista = [];
  }
}
