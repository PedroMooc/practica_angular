import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostblogService } from './postblog.service';
import { TablaComponent } from "./tabla/tabla.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    TablaComponent,
    NgIf
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto041';
  post: any;
  titulosColumnas = [
    'código de usuario',
    'Código de post',
    'Titulo',
    'Descripción'
  ];

  constructor(private postblogService: PostblogService){

  }

  ngOnInit() {
    this.postblogService.retornar()
      .subscribe(result => this.post = result)
  }

}
