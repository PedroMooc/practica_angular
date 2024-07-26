import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  template: `
      <ul>
      <li>Primero</li>
      <li>Segundo</li>
      <li>Tercero</li>
      <li>Cuarto</li>
    </ul>
  `,
  styleUrl: './card-list.component.css',
})
export class CardListComponent { }
