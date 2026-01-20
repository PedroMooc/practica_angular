import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
  title = 'proyecto061';

  resultado!: string;

  constructor(private fb: FormBuilder) {}

  formularioContacto = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    mail:['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(50)]]
  });

  submit() {
    if (this.formularioContacto.valid) {
      this.resultado =  "Todos los datos son válidos";
    } else {
      this.resultado =  "Hay datos inválidos en el formulario";
    }
  }
}
