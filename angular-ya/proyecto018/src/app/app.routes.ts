import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Pais1Component } from './pais1/pais1.component';
import { Pais2Component } from './pais2/pais2.component';
import { Pais3Component } from './pais3/pais3.component';

export const routes: Routes = [
  {
    path: 'pais1',
    component: Pais1Component
  },
  {
    path: 'pais2',
    component: Pais2Component
  },
  {
    path: 'pais3',
    component: Pais3Component
  }
];

