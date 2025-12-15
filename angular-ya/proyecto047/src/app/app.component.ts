import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResaltadoDirective } from './resaltado.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ResaltadoDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto047';

  colorselect = "green";
  tamanoFuente = 30;

  cambiarColor(col: string){
    this.colorselect = col;
  }

  agrandar() {
    this.tamanoFuente++;
  }

  achicar(){
    this.tamanoFuente--;
  }
}
