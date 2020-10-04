import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-galeria-feas',
  templateUrl: './galeria-feas.page.html',
  styleUrls: ['./galeria-feas.page.scss'],
})
export class GaleriaFeasPage implements OnInit {


  base64Image: any;
  picture: any;
  foto: any;
  fotos: Observable<any[]>;
  listaFotos: any[];
  listaOrdenada: any[];
  like: boolean = false;
  mensaje: string;
  meGusta: boolean;
  permitirLike: boolean;
  auxLista: any[];
  activo: boolean = false;
  spinner: boolean = false;

  constructor(private authService: AuthService, private context: AngularFireDatabase, private userService: UsuarioService) {
    this.context.list('fotosFeas').valueChanges().subscribe((Response) => {
      this.listaOrdenada = Response;
    });
  }

  ngOnInit() {

    setTimeout(() => {
      this.Ordenar();
      this.spinner = true;
    }, 2000);

  }


  MeGusta(foto) {
    console.log(foto)
    if (this.like == true) {
      this.like = false;

    } else {

      this.like = true;

    }
    console.log(this.like)
  }

  MostrarFotosUser() {
    this.activo = true;
    this.authService.getCurrentUser().then((Response: any) => {
      this.auxLista = this.listaOrdenada;
      this.listaOrdenada = this.listaOrdenada.filter(u => u.usuario == Response.email)
      this.Ordenar();
    });
  }


  MostrarFotosGaleria() {
    this.listaOrdenada = this.auxLista
    this.activo = false;
    this.Ordenar();
  }


  DarLike(foto) {
    this.authService.getCurrentUser().then((Response: any) => {

      this.permitirLike = true;
      let arregloDeLikes: string[] = foto.likesUser.split(",");


      if (foto.likesUser != "") {
        arregloDeLikes.forEach((element) => {
          if (element == Response.email) {
            this.mensaje = "No puedes volver a dar me gusta a esta foto";
            this.permitirLike = false;
            setTimeout(() => {
              this.mensaje = null;
            }, 2000)
          }
        });

        if (this.permitirLike) {
          this.mensaje = "¡¡Te gusta esta foto!!"
          setTimeout(() => {
            this.mensaje = null;
          }, 2000)
          foto.likesUser += "," + Response.email;
          foto.cantLikes++;

          this.context.list('fotosFeas').update(foto.id, { likesUser: foto.likesUser, cantLikes: foto.cantLikes }).then(() => {
            this.Ordenar();
          });
        }
      } else {
        this.mensaje = "¡¡Te gusta esta foto!!"
        setTimeout(() => {
          this.mensaje = null;
        }, 2000)
        foto.likesUser = Response.email;
        foto.cantLikes++;

        this.context.list('fotosFeas').update(foto.id, { likesUser: foto.likesUser, cantLikes: foto.cantLikes }).then(() => {
          this.Ordenar();
        });
      }

    });


  }


  Ordenar() {
    this.listaOrdenada.sort((a, b) => {
      if (a.fecha < b.fecha)
        return 1
      else
        return -1
    })
  }

}
