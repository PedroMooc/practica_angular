import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  @Input() valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
}
