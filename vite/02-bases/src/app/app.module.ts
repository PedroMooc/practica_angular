import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModeule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModeule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
