import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto059';
  resultado!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });

  submit() {
    if (this.formularioContacto.valid){
      this.resultado = "Todos los datos son válidos";
    } else {
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }
}
