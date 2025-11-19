import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';



@NgModule({
  imports: [
    CommonModule,
    DadoComponent
  ],
  exports: [
    DadoComponent
  ]
})
export class ElementosModule { }
