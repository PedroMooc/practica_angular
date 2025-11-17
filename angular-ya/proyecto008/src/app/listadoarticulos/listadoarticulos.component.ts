import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listadoarticulos.component.html',
  styleUrl: './listadoarticulos.component.css'
})
export class ListadoarticulosComponent {
  @Input() datos:any;

  constructor() { }

  ngOnInit(): void {
  }
}
