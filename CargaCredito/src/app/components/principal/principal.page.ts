import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
import { Platform } from "@ionic/angular";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-principal",
  templateUrl: "./principal.page.html",
  styleUrls: ["./principal.page.scss"],
})
export class PrincipalPage implements OnInit {
  scanSub: any;
  valorQr: number = 0;
  valorTexto: string;
  usuario: string;
  valorBind: number = 0;
  contadorDiez: number = 0;
  contadorCien: number = 0;
  contadorCincuenta: number = 0
  error: string;
  spinner: boolean = false;

  constructor(   private qrScanner: QRScanner,   private platform: Platform,  private authService: AuthService,  private route: Router) {

    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.scanSub.unsubscribe();
    });

    this.authService.getCurrentUser().then((response: any) => {
      this.usuario = response.email;
    });
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }
  CargarQR() {
    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qrScanner.show();

          document.getElementsByTagName("body")[0].style.opacity = "0";

          this.scanSub = this.qrScanner.scan().subscribe(
            (text: string) => {
              document.getElementsByTagName("body")[0].style.opacity = "1";
              this.CargarValorQR(text);
              this.qrScanner.hide();
              this.scanSub.unsubscribe();
            },
            (error) => {
              alert(error);
            }
          );
        }
      })
      .catch((e: any) => alert(e));

    setTimeout(() => this.ValidarUser(), 2000);
  }

  ValidarUser() {
    if (this.usuario == "admin@admin.com") {
      this.ValidarCargasAdmin();
    } else {
      this.ValidarCargasUser();
    }
  }

  ValidarCargasAdmin() {
    if (this.valorQr == 10 && this.contadorDiez < 2) {
      this.valorBind += this.valorQr;
      this.contadorDiez++;
    } else if (this.valorQr == 50 && this.contadorCincuenta < 2) {
      this.valorBind += this.valorQr;
      this.contadorCincuenta++;
    } else if (this.valorQr == 100 && this.contadorCien < 2) {
      this.valorBind += this.valorQr;
      this.contadorCien++;
    } else {
      this.error = "Valor ya cargado";
      setTimeout(() => this.error = null, 2000);
    }
  }

  ValidarCargasUser() {
    if (this.valorQr == 10 && this.contadorDiez == 0) {
      this.valorBind += this.valorQr;
      this.contadorDiez++;
    } else if (this.valorQr == 50 && this.contadorCincuenta == 0) {
      this.valorBind += this.valorQr;
      this.contadorCincuenta++;
    } else if (this.valorQr == 100 && this.contadorCien == 0) {
      this.valorBind += this.valorQr;
      this.contadorCien++;
    }
    else {
      this.error = "Valor ya cargado";
      setTimeout(() => this.error = null, 2000);
    }
  }

  GoBack() {
    this.route.navigate(["/login"]);
    this.Limpiar();
  }

  Limpiar() {
    this.valorQr = 0;
    this.valorBind = 0;
    this.contadorCien = 0;
    this.contadorCincuenta = 0;
    this.contadorDiez = 0;

  }

  CargarValorQR(valor: string) {
    switch (valor) {
      case "8c95def646b6127282ed50454b73240300dccabc":
        this.valorQr = 10;
        break;

      case "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ":
        this.valorQr = 50;
        break;

      case "2786f4877b9091dcad7f35751bfcf5d5ea712b2f":
        this.valorQr = 100;
        break;

      default:
        this.valorQr = 420;
        break;
    }
  }
}
