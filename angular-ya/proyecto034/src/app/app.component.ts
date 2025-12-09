import { HttpClientModule } from '@angular/common/http';
import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsuarioService } from './usuario.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto034';

  usuario: any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.recuperarPersona();
  }

  recargar() {
    this.recuperarPersona();
  }

  recuperarPersona() {
    this.usuarioService.retornar()
      .subscribe(result => {
        this.usuario = result;
        console.log(this.usuario);
      })
  }
}
