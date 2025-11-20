import { Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';

export const routes: Routes = [
  {
    path:'juegodados',
    component: JuegodadosComponent
  },
  {
    path:'acercade',
    component: AcercadeComponent
  }
];

