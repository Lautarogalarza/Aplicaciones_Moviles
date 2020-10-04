import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { Usuario } from "../../clases/usuario";
import { UsuarioService } from "../../servicios/usuario.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  spinner: boolean = false;
  constructor(private authService: AuthService, public router: Router, private userService: UsuarioService) { }

  ngOnInit() {
    setTimeout(() => {
      this.spinner = true;
    }, 5000);

  }
  usuario: any = new Usuario();
  auxUser: any;

  error: any;
  usuarios = ["tester@tester.com", "anonimo@anonimo.com", "usuario@usuario.com", "invitado@invitado.com", "admin@admin.com"];

  cambio(value) {
    this.usuario.email = value.target.value;

    switch (value.target.value) {
      case "tester@tester.com":
        this.usuario.password = "111111";
        break;

      case "anonimo@anonimo.com":

        this.usuario.password = "222222";

        break;

      case "usuario@usuario.com":

        this.usuario.password = "333333";

        break;

      case "invitado@invitado.com":

        this.usuario.password = "444444";

        break;

      case "admin@admin.com":

        this.usuario.password = "555555";

        break;

      default:
        break;
    }

  }

  OnSubmitLogin() {

    if ((this.usuario.email == '' || this.usuario.password == '') || (this.usuario.email == null || this.usuario.password == null)) {

      this.Vibrar();
      this.error = "Usuario o contraseña vacío"
    }
    else {


      if (this.usuario.email.includes("@") == false) {
        this.Vibrar();
        this.error = "No es un correo electrónico"

      }
      else if (this.usuario.password.length < 4) {
        this.Vibrar();
        this.error = "Contraseña muy corta mínimo  4 caracteres"
      }
      else if (this.usuario.password.length > 8) {
        this.Vibrar();
        this.error = "Contraseña muy larga máximo  8 caracteres"
      }


      else {
        this.error = null;

        this.authService.login(this.usuario.email, this.usuario.password).then(response => {

          this.router.navigate(['/principal']);
          this.Limpiar();
        }).catch(error => this.Vacio());


      }

    }

  }

  Vacio() {
    this.error = "El usuario no existe";
    this.Vibrar();
  }

  Vibrar() {
    navigator.vibrate(500);

  }

  Limpiar() {
    this.error = null;
    console.log(this.error);
    this.usuario.email = null;
    this.usuario.password = null;
    let select = <HTMLInputElement>document.getElementById("miselect");
    select.value = "Seleccione un usuario";

  }

}


