import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  partidos: Observable<any[]>;
  listaPartidos: any[];
  listaOrdenada: any[];
  spinner: boolean = false;
  constructor(private context: AngularFireDatabase, private route: Router) {
    this.context.list('partidos').valueChanges().subscribe((Response) => {
      this.listaOrdenada = Response;
      this.Ordenar();
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

  ngOnInit() {

    setTimeout(() => {
      this.spinner = true;
    }, 20000);
    
  }

  GoBack() {
    this.route.navigate(["/login"]);
  }

}
