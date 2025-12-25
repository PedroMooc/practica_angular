import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablanro',
  standalone: true,
  imports: [],
  templateUrl: './tablanro.component.html',
  styleUrl: './tablanro.component.css'
})
export class TablanroComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}
  nro!: number;
  tabla!: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!);
      this.tabla = '';
      for(let x = 1; x <= 10; x++){
        let t = x* this.nro;
        this.tabla += t + '-';
      }
    })
  }
}
