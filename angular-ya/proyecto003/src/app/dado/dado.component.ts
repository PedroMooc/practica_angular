import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
   valor: number = 1;

    lanzarDado(){
      this.valor = Math.trunc(Math.random() * 6) + 1;
    }

    ngOnInit(){
      this.lanzarDado();
    }
  }
