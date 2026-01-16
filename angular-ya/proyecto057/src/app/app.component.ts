import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
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
  title = 'proyecto057';
  conversion!: string;
  potenciaNumero!: number;
  cantidad!: number;

  formularioConversion = new FormGroup({
    numerodecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  });

  submit() {
    if(this.formularioConversion.value.base == "hexadecimal"){
      this.conversion = parseInt(this.formularioConversion.value.numerodecimal!).toString(16);
    }
    if(this.formularioConversion.value.base == "octal"){
      this.conversion = parseInt(this.formularioConversion.value.numerodecimal!).toString(8);
    }
    this.potenciaNumero = Math.pow(
      parseInt(this.formularioConversion.value.numerodecimal!),
      parseInt(this.formularioConversion.value.potencia!)
    );
    if(this.formularioConversion.value.largo){
      this.cantidad = this.formularioConversion.value.numerodecimal!.length;
    }
  }
}
