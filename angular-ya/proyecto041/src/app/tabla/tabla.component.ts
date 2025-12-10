import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'boot-tabla',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  @Input() titulos: any;
  @Input() filas: any;

  objectKeys = Object.keys;

  constructor (){}

  ngOnInit() {

  }
}
