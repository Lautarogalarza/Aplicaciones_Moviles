import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from '../../servicios/usuario.service'



@Component({
  selector: 'app-mas-votadas-feas',
  templateUrl: './mas-votadas-feas.page.html',
  styleUrls: ['./mas-votadas-feas.page.scss'],
})
export class MasVotadasFeasPage implements OnInit {

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
  spinner: boolean = false;
  activo: boolean = false;

  constructor(private authService: AuthService, private context: AngularFireDatabase, private userService: UsuarioService) {
    this.fotos = this.context.list('fotosFeas').valueChanges();
    this.fotos.subscribe(fotos => this.listaFotos = fotos, error => console.log(error));
  }

  ngOnInit() {

    setTimeout(() => {
      this.Ordenar();
      this.spinner = true;
    }, 3000);

  }

  Ordenar() {
    this.listaFotos = this.listaFotos.sort((a, b) => b.cantLikes - a.cantLikes);
  }
}
