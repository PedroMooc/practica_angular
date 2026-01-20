import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto058';
  resultado!: string;

  formAlumno = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
    })
  });

  submit() {
    let nota1 = parseInt(this.formAlumno.value.notas!.nota1!);
    let nota2 = parseInt(this.formAlumno.value.notas!.nota2!);
    let nota3 = parseInt(this.formAlumno.value.notas!.nota3!);
    if (nota1 >=4 && nota2 >=4 && nota3 >=4) {
      this.resultado = "El alumno queda aprobado por esas notas.";
    }else{
      this.resultado = "El alumno no aprueba por esas notas.";
    }
  }
}
