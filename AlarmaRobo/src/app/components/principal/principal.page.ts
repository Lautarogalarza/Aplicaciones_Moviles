import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  data: any;
  estadoTelefono = '';
  spinner: boolean = false;
  controlDerecha: number = 0;
  controlIzquierda: number = 0;
  controlReposo: number = 0;
  controlVertical: number = 0;
  reproduciendo: boolean = false;

  presionado: boolean = false;
  presionadoDesactivar: boolean = true;
  btnText = 'Activar';
  activo: boolean = false;
  clave: string;

  subscription = null;
  audio;

  claveCorrecta = false;
  constructor(
    private deviceMotion: DeviceMotion,
    private flashDevice: Flashlight,
    private vibrar: Vibration,
    private alert: AlertController
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.spinner = true;
    }, 3000);
  }

  options: DeviceMotionAccelerometerOptions = {
    frequency: 500
  };

  ActivarAlarma() {


    if (this.presionado) {
      // this.DesactivarAlarmaClave();
    }
    else {
      this.btnText = 'Desactivar';
      this.presionado = !this.presionado;
      this.PruebaAcelerometro();
      this.activo = true;
    }
  }

  PruebaAcelerometro() {
    if (this.presionado) {
      this.subscription = this.deviceMotion
        .watchAcceleration(this.options)
        .subscribe((acceleration: DeviceMotionAccelerationData) => {
          this.data = acceleration;

          if (this.data.z >= 9) {
            if (this.controlReposo <= 1) {
              this.controlDerecha = 0;
              this.controlIzquierda = 0;
              this.controlVertical = 0;
              this.controlReposo++;
              this.estadoTelefono = 'Estoy sobre la mesa';
              this.reproducirSonido('Reposo');
              this.vibrar.vibrate(5000);
            }
          }
          else if (this.data.x >= 5) {
            if (this.controlIzquierda <= 1) {
              this.controlDerecha = 0;
              this.controlVertical = 0;
              this.controlReposo = 0;
              this.controlIzquierda++;
              this.estadoTelefono = 'Apoyado en la mesa inclinado hacia la izquierda.';
              this.reproducirSonido('Izquierda');
            }
          }


          else if (this.data.x <= -5) {
            if (this.controlDerecha <= 1) {
              this.controlIzquierda = 0;
              this.controlVertical = 0;
              this.controlReposo = 0;
              this.controlDerecha++;
              this.estadoTelefono = 'Apotado en la mesa inclinado hacia la derecha.';
              this.reproducirSonido('Derecha');
            }
          } else if (this.data.y >= 5) {
            if (this.controlVertical <= 1) {
              this.controlIzquierda = 0;
              this.controlDerecha = 0;
              this.controlReposo = 0;
              this.controlVertical++;
              this.estadoTelefono = 'Apoyado en la mesa inclinado hacia arriba.';
              this.Linterna();
              this.reproducirSonido('Vertical');
            }
          }
        });
    }

  }

  reproducirSonido(caso: string) {
    switch (caso) {
      case "Derecha":
        this.Play("../../../assets/audios/derecha.mp3");
        break;
      case "Izquierda":
        this.Play("../../../assets/audios/izquierda.mp3");
        break;
      case "Reposo":
        this.Play("../../../assets/audios/vertical.mp3");
        break;
      case "Vertical":
        this.Play("../../../assets/audios/horizontal.mp3");
        break;
    }
  }

  Play(path: string) {
    if (!this.reproduciendo) {
      this.reproduciendo = true;
      this.audio = new Audio(path);
      this.audio.play();
    }

    setTimeout(() => {
      this.reproduciendo = false;
    }, 1000);
  }

  Linterna() {
    this.flashDevice.switchOn();

    setTimeout(() => {
      this.flashDevice.switchOff()
    }, 5000);
  }

  ActivarMensaje() {
    this.presionadoDesactivar = false;
  }

  DesactivarAlarma() {

    let user = JSON.parse(localStorage.getItem("usuario"));

    console.log(user.password);

    if (this.clave == user.password) {
      console.log("es correcta");
      this.clave = null;
      this.presionadoDesactivar = true;
      this.activo = false
      this.presionado = false;
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    else {
      console.log("es incorrecta");
      this.clave = null;
      this.vibrar.vibrate(1000);
    }

  }



}
