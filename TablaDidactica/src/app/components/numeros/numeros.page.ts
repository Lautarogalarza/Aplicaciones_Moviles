import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  idioma: string;
  audio: any
  numero: string;
  constructor(private router: Router, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.idioma = this._Activatedroute.snapshot.paramMap.get("valorIdioma");
  }

  CambiarIdioma(idioma: string) {
    this.idioma = idioma;
  }

  GoBack() {
    this.router.navigate(['/principal'])
  }



  Reproducir(numero: string) {
    this.numero = numero;

    switch (this.idioma) {
      case "ingles":

        this.ReproducirIngles(numero);
        break;

      case "español":
        this.ReproducirEspañol(numero);
        break;

      case "portugues":
        this.ReproducirPortugues(numero);
        break;

      default:
        break;
    }

  }





  ReproducirEspañol(numero: string) {

    switch (numero) {

      case "uno":
        this.audio = new Audio('../../../assets/audios/unoEspañol.mp3');
        this.audio.play();
        break;

      case "dos":
        this.audio = new Audio('../../../assets/audios/dosEspañol.mp3');
        this.audio.play();
        break;

      case "tres":
        this.audio = new Audio('../../../assets/audios/tresEspañol.mp3');
        this.audio.play();
        break;

      case "cuatro":
        this.audio = new Audio('../../../assets/audios/cuatroEspañol.mp3');
        this.audio.play();
        break;

      case "cinco":
        this.audio = new Audio('../../../assets/audios/cincoEspañol.mp3');
        this.audio.play();
        break;

      default:
        break;
    }

  }

  ReproducirIngles(numero: string) {

    switch (numero) {

      case "uno":
        this.audio = new Audio('../../../assets/audios/unoIngles.mp3');
        this.audio.play();
        break;

      case "dos":
        this.audio = new Audio('../../../assets/audios/dosIngles.mp3');
        this.audio.play();
        break;

      case "tres":
        this.audio = new Audio('../../../assets/audios/tresIngles.mp3');
        this.audio.play();
        break;

      case "cuatro":
        this.audio = new Audio('../../../assets/audios/cuatroIngles.mp3');
        this.audio.play();
        break;

      case "cinco":
        this.audio = new Audio('../../../assets/audios/cincoIngles.mp3');
        this.audio.play();
        break;

      default:
        break;
    }

  }

  ReproducirPortugues(numero: string) {

    switch (numero) {

      case "uno":
        this.audio = new Audio('../../../assets/audios/unoPortugues.mp3');
        this.audio.play();
        break;

      case "dos":
        this.audio = new Audio('../../../assets/audios/dosPortugues.mp3');
        this.audio.play();
        break;

      case "tres":
        this.audio = new Audio('../../../assets/audios/tresPortugues.mp3');
        this.audio.play();
        break;

      case "cuatro":
        this.audio = new Audio('../../../assets/audios/cuatroPortugues.mp3');
        this.audio.play();
        break;

      case "cinco":
        this.audio = new Audio('../../../assets/audios/cincoPortugues.mp3');
        this.audio.play();
        break;

      default:
        break;
    }
  }











}
