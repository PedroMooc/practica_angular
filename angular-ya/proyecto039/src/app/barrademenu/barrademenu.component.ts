import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'boot-barrademenu',
  standalone: true,
  imports: [NgFor
  ],
  templateUrl: './barrademenu.component.html',
  styleUrl: './barrademenu.component.css'
})
export class BarrademenuComponent implements OnInit{
  @Input() opciones!: string[];
  @Input() colorfondo!: string;
  @Output() presionopcion = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  presion(i: number): void {
    this.presionopcion.emit(i);
  }
}
