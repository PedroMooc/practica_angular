import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';
import { NgIf, NgForOf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto013';
  articulos: any;

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.articulosService.retornar()
      .subscribe( result => this.articulos = result )
    console.table(this.articulos);
  }
}
