import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  valorIdioma: string = "";
  valorTema: string = "";
  spinner: boolean = false;
  constructor(private router: Router) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);

  }

  elegirIdioma(valorIdioma: string) {
    this.valorIdioma = valorIdioma;

  }

  elegirTema(valorTema: string) {
    this.valorTema = valorTema;
  }

  GoBack() {
    this.router.navigate(['/login'])
  }

  CambiarComponente() {

    if (this.valorIdioma != "" && this.valorTema != "") {

      switch (this.valorTema) {
        case "animales":
          this.router.navigate(['animales', this.valorIdioma])
          this.valorIdioma = "";
          this.valorTema = "";
          break;

        case "numeros":
          this.router.navigate(['numeros', this.valorIdioma])
          this.valorIdioma = "";
          this.valorTema = "";
          break;

        case "colores":
          this.router.navigate(['colores', this.valorIdioma])
          this.valorIdioma = "";
          this.valorTema = "";
          break;

        default:
          break;
      }
    }

  }

}
