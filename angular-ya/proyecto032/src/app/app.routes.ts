import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { AcercadeComponent } from './acercade/acercade.component';

export const routes: Routes = [
  {
    path: 'juegodados',
    component: JuegodadosComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  }
];
