import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ValidacionesPropias } from './validaciones-propias';
import { NgIf } from '@angular/common';

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
  title = 'proyecto060';

  formularioContacto =  new FormGroup({
    numero: new FormControl('', [ValidacionesPropias.multiplo5])
  });

  submit() {
    alert('dato correcto');
  }
}
