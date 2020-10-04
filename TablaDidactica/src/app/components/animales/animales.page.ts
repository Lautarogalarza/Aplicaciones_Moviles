import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  idioma: string;
  audio: any
  animal:string;
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

  Reproducir(animal: string) {
    this.animal=animal;

    switch (this.idioma) {
      case "ingles":

        this.ReproducirIngles(animal);
        break;

      case "español":
        this.ReproducirEspañol(animal);
        break;

      case "portugues":
        this.ReproducirPortugues(animal);
        break;

      default:
        break;
    }

  }

  ReproducirEspañol(animal: string) {

    switch (animal) {

      case "caballo":
        this.audio = new Audio('../../../assets/audios/caballoEspañol.mp3');
        this.audio.play();
        break;

      case "pato":
        this.audio = new Audio('../../../assets/audios/patoEspañol.mp3');
        this.audio.play();
        break;

      case "cerdo":
        this.audio = new Audio('../../../assets/audios/cerdoEspañol.mp3');
        this.audio.play();
        break;

      case "oveja":
        this.audio = new Audio('../../../assets/audios/ovejaEspañol.mp3');
        this.audio.play();
        break;

      case "vaca":
        this.audio = new Audio('../../../assets/audios/vacaEspañol.mp3');
        this.audio.play();   
        break;

      default:
        break;
    }

  }

  ReproducirIngles(animal: string) {

    switch (animal) {

      case "caballo":
        this.audio = new Audio('../../../assets/audios/caballoIngles.mp3');
        this.audio.play();
        break;

      case "pato":
        this.audio = new Audio('../../../assets/audios/patoIngles.mp3');
        this.audio.play();
        break;

      case "cerdo":
        this.audio = new Audio('../../../assets/audios/cerdoIngles.mp3');
        this.audio.play();
        break;

      case "oveja":
        this.audio = new Audio('../../../assets/audios/ovejaIngles.mp3');
        this.audio.play();
        break;

      case "vaca":
        this.audio = new Audio('../../../assets/audios/vacaIngles.mp3');
        this.audio.play();
        break;

      default:
        break;
    }

  }

  ReproducirPortugues(animal: string) {

    switch (animal) {

      case "caballo":
        this.audio = new Audio('../../../assets/audios/caballoPortugues.mp3');
        this.audio.play();
        break;

      case "pato":
        this.audio = new Audio('../../../assets/audios/patoPortugues.mp3');
        this.audio.play();
        break;

      case "cerdo":
        this.audio = new Audio('../../../assets/audios/cerdoPortugues.mp3');
        this.audio.play();
        break;

      case "oveja":
        this.audio = new Audio('../../../assets/audios/ovejaPortugues.mp3');
        this.audio.play();
        break;

      case "vaca":
        this.audio = new Audio('../../../assets/audios/vacaPortugues.mp3');
        this.audio.play();
        break;

      default:
        break;
    }

  }


}
