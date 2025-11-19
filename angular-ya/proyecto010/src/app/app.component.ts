import { NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto010';
  articulos: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get("https://ejerciciostutorialesya.com/vue/datos.php")
    .subscribe(
      resultado => {
        this.articulos = resultado;
        console.log(this.articulos);
      }
    )
  }
}
