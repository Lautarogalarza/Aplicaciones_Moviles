import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-carga-partido',
  templateUrl: './carga-partido.page.html',
  styleUrls: ['./carga-partido.page.scss'],
})
export class CargaPartidoPage implements OnInit {
  valorEquipoRojo: number = 0;
  valorEquipoAzul: number = 0;
  jugador1: string;
  jugador2: string;
  fecha: any;
  partidos: Observable<any[]>;
  listaPartidos: any[];
  listaJugadores: any[];
  base64Image: string;
  jugadores: Observable<any[]>;
  spinner: boolean = true;
  mensaje: string;

  constructor(private route: Router, private camera: Camera, private context: AngularFireDatabase, private authService: AuthService) {
    this.partidos = this.context.list('partidos').valueChanges();
    this.partidos.subscribe(partidos => this.listaPartidos = partidos, error => console.log(error));

    this.jugadores = this.context.list('jugadores').valueChanges();
    this.jugadores.subscribe(jugadores => this.listaJugadores = jugadores, error => console.log(error));
  }

  ngOnInit() {

  }

  GoBack() {
    this.route.navigate(["/login"]);
  }


  SacarFoto() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,

    }

    this.camera.getPicture(options).then((imageData) => {

      this.base64Image = 'data:image/jpeg;base64,' + imageData

    }, (err) => {

      alert(err);
    });


  }

  getFecha(): string {
    var fecha = new Date();
    let d, m, y, h, min, s;
    d = fecha.getDate();
    m = fecha.getUTCMonth();
    y = fecha.getFullYear();
    h = fecha.getHours().toString();
    min = fecha.getMinutes().toString();
    s = fecha.getSeconds().toString();

    return y + "-" + m + "-" + d + "_" + h + "-" + min + "-" + s;
  }


  CargarPartido() {
   this.authService.getCurrentUser().then(Response => {

      let jugadores = this.jugador1 + " vs " + this.jugador2;
      let resultado = this.valorEquipoAzul + " - " + this.valorEquipoRojo;
      let fecha = this.getFecha();
      this.spinner = false;
      this.context.list('partidos').set(jugadores + fecha, { fecha: this.fecha, jugadores: jugadores, resultado: resultado, foto: this.base64Image, id: jugadores + fecha }).then(() => {
        this.CargarGanador();
        this.mensaje = "Partido Cargado!!";
        setTimeout(() => {
          this.mensaje = null;
        }, 2000);
        this.spinner = true;
      });

    });

  }

  CargarGanador() {

    let ganador: string;
    let auxLista: any[];
    let puntaje: number;
    this.valorEquipoAzul > this.valorEquipoRojo ? ganador = this.jugador1 : ganador = this.jugador2;
    auxLista = this.listaJugadores.filter(u => u.jugador == ganador);
    console.log(this.listaJugadores);
    auxLista.length == 0 ? puntaje = 1 : puntaje = auxLista[0].victorias + 1;
    console.log("gano", ganador);
    this.context.list('jugadores').set(ganador, { jugador: ganador, victorias: puntaje, id: ganador });

  }



  CargarRojo() {
    this.valorEquipoRojo < 10 ? this.valorEquipoRojo++ : this.valorEquipoRojo;
  }
  RestarRojo() {
    this.valorEquipoRojo > 0 ? this.valorEquipoRojo-- : this.valorEquipoRojo;
  }

  CargarAzul() {
    this.valorEquipoAzul < 10 ? this.valorEquipoAzul++ : this.valorEquipoAzul;
  }
  RestarAzul() {
    this.valorEquipoAzul > 0 ? this.valorEquipoAzul-- : this.valorEquipoAzul;
  }



}
