import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto019';
  posiciones = [['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']];
  jugador =  'O';

  presion(fila: number, columna: number) {
    if (this.posiciones[fila][columna] === '-') {
      this.posiciones[fila][columna] = this.jugador;
      this.cambiarJugador();
      this.verificarGano('X');
      this.verificarGano('O');
    }
  }

  cambiarJugador() {
    if (this.jugador === 'O') {
      this.jugador = 'X';
    } else {
      this.jugador = 'O';
    }
  }

  verificarGano(ficha: string) {
    if ( this.posiciones[0][0] === ficha && this.posiciones[0][1] === ficha && this.posiciones[0][2] === ficha ||
         this.posiciones[1][0] === ficha && this.posiciones[1][1] === ficha && this.posiciones[1][2] === ficha ||
         this.posiciones[2][0] === ficha && this.posiciones[2][1] === ficha && this.posiciones[2][2] === ficha ||
         this.posiciones[0][0] === ficha && this.posiciones[1][0] ===ficha && this.posiciones[2][0] === ficha ||
         this.posiciones[0][1] === ficha && this.posiciones[1][1] ===ficha && this.posiciones[2][1] === ficha ||
         this.posiciones[0][2] === ficha && this.posiciones[1][2] ===ficha && this.posiciones[2][2] === ficha ||
         this.posiciones[0][0] === ficha && this.posiciones[1][1] ===ficha && this.posiciones[2][2] === ficha ||
         this.posiciones[0][2] === ficha && this.posiciones[1][1] ===ficha && this.posiciones[2][0] === ficha ) {
      alert('Gano ' + ficha);
      //this.reiniciar();
    }
  }

  reiniciar() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.posiciones[i][j] = '-';
      }
    }
    this.jugador =  'O';
  }
}
