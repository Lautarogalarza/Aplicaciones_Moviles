import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { Usuario } from "../../classes/usuario";
import { UsuarioService } from "../../services/usuario.service";
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
    }, 6000);

}
  usuario: any = new Usuario();
  auxUser: any;

  error: any;
  usuarios = ["tester@tester.com", "anonimo@anonimo.com", "usuario@usuario.com", "invitado@invitado.com", "admin@admin.com"];

  cambio(value) {
    this.usuario.email = value.target.value;

    switch (value.target.value) {
      case "Tester":
        this.usuario.email = "tester@tester.com";
        this.usuario.password = "111111";
        break;

      case "Anonimo":
        this.usuario.email = "anonimo@anonimo.com";
        this.usuario.password = "222222";

        break;

      case "Usuario":
        this.usuario.email = "usuario@usuario.com";
        this.usuario.password = "333333";

        break;

      case "Invitado":
        this.usuario.email = "invitado@invitado.com";
        this.usuario.password = "444444";

        break;

      case "Admin":
        this.usuario.email = "admin@admin.com";
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
        this.error = "Contraseña muy corta mínimo 4 caracteres"
      }
      else if (this.usuario.password.length > 8) {
        this.Vibrar();
        this.error = "Contraseña muy larga máximo 8 caracteres"
      }


      else {
        this.error = null;

        this.authService.login(this.usuario.email, this.usuario.password).then(response => {

          this.router.navigate(['/principal']);
          this.userService.usuario = JSON.parse(JSON.stringify(this.usuario));
          Usuario.CargarUser(this.userService.usuario);
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
    this.usuarios=null;
    this.error = null;
    this.usuario.email = null;
    this.usuario.password = null;

  }

}


