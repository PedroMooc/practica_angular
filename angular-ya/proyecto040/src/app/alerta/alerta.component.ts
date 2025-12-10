import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'boot-alerta',
  standalone: true,
  imports: [],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.css'
})
export class AlertaComponent implements OnInit {

  @Input() color!: string;
  @Input() mensaje!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
