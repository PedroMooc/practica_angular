import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto012';
  articulos: any;

  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.articulos = this.articulosService.retornar();
    console.table(this.articulos);
  }
}
