import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
