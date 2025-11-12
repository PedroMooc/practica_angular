import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  standalone: true,
  imports: [],
  templateUrl: './selectornumerico.component.html',
  styleUrl: './selectornumerico.component.css'
})
export class SelectornumericoComponent {
  @Input() minimo: number = 1;
  @Input() maximo: number = 1;
  actual: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.actual = this.minimo;
  }

  incrementar(): void {
    if (this.actual < this.maximo) {
      this.actual++;
    }
  }

  decrementar(): void {
    if (this.actual > this.minimo) {
      this.actual--;
    }
  }

  fijar(valor: number): void {
    if (valor >= this.minimo && valor <= this.maximo) {
      this.actual = valor;
    }
  }
}
