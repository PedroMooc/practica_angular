import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    MatSliderModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto024';
  slider1 = 0;
  slider2 = 0;
  slider3 = 0;
  suma = 0;

  cambiar() {
    this.suma = this.slider1 + this.slider2 + this.slider3;
  }
}
