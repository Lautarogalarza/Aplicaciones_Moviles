import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  idioma: string;
  audio: any
  color: string;
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


  Reproducir(color: string) {
    this.color = color;

    switch (this.idioma) {
      case "ingles":

        this.ReproducirIngles(color);
        break;

      case "español":
        this.ReproducirEspañol(color);
        break;

      case "portugues":
        this.ReproducirPortugues(color);
        break;

      default:
        break;
    }

  }





  ReproducirEspañol(color: string) {

    switch (color) {

      case "rojo":
        this.audio = new Audio('../../../assets/audios/rojoEspañol.mp3');
        this.audio.play();
        break;

      case "verde":
        this.audio = new Audio('../../../assets/audios/verdeEspañol.mp3');
        this.audio.play();
        break;

      case "azul":
        this.audio = new Audio('../../../assets/audios/azulEspañol.mp3');
        this.audio.play();
        break;

      case "amarillo":
        this.audio = new Audio('../../../assets/audios/amarilloEspañol.mp3');
        this.audio.play();
        break;

      case "morado":
        this.audio = new Audio('../../../assets/audios/moradoEspañol.mp3');
        this.audio.play();
        break;

      default:
        break;
    }

  }

  ReproducirIngles(color: string) {

    switch (color) {

      case "rojo":
        this.audio = new Audio('../../../assets/audios/rojoIngles.mp3');
        this.audio.play();
        break;

      case "verde":
        this.audio = new Audio('../../../assets/audios/verdeIngles.mp3');
        this.audio.play();
        break;

      case "azul":
        this.audio = new Audio('../../../assets/audios/azulIngles.mp3');
        this.audio.play();
        break;

      case "amarillo":
        this.audio = new Audio('../../../assets/audios/amarilloIngles.mp3');
        this.audio.play();
        break;

      case "morado":
        this.audio = new Audio('../../../assets/audios/mordadoIngles.mp3');
        this.audio.play();
        break;

      default:
        break;
    }

  }

  ReproducirPortugues(color: string) {

    switch (color) {

      case "rojo":
        this.audio = new Audio('../../../assets/audios/rojoPortugues.mp3');
        this.audio.play();
        break;

      case "verde":
        this.audio = new Audio('../../../assets/audios/verdePortugues.mp3');
        this.audio.play();
        break;

      case "azul":
        this.audio = new Audio('../../../assets/audios/azulPortugues.mp3');
        this.audio.play();
        break;

      case "amarillo":
        this.audio = new Audio('../../../assets/audios/amarilloPortugues.mp3');
        this.audio.play();
        break;

      case "morado":
        this.audio = new Audio('../../../assets/audios/moradoPortugues.mp3');
        this.audio.play();
        break;

      default:
        break;
    }

  }




}

