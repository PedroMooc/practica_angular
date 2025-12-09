
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { PostblogService } from './postblog.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatExpansionModule,
    HttpClientModule,
    NgIf,
    NgFor
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto036';
  post: any;

  constructor(private postblogService: PostblogService) { }

  ngOnInit() {
    this.postblogService.retornar()
      .subscribe(result => this.post = result);
    console.log(this.post);
  }
}
