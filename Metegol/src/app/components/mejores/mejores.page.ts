import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mejores',
  templateUrl: './mejores.page.html',
  styleUrls: ['./mejores.page.scss'],
})
export class MejoresPage implements OnInit {
  listaJugadores: any[];
  jugadores: Observable<any[]>;
  listaMejores:any[];
  listaCincoMejores:any[]=  new Array();
  spinner: boolean = false;
  constructor(private route:Router, private context: AngularFireDatabase) { 
    this.context.list('jugadores').valueChanges().subscribe((Response) => {
      this.listaJugadores = Response;
      this.Ordenar();
    }); 
  
  }

  ngOnInit() {
    
    setTimeout(() => {
      this.spinner = true;
    }, 6000);
  }

    GoBack(){
      this.route.navigate(["/resultados"]);
    }


    Ordenar(){
      this.listaMejores = this.listaJugadores.sort((a, b) => b.victorias  - a.victorias  );

     for (let index = 0; index < 5; index++) {
        this.listaCincoMejores.push(this.listaMejores[index]);
      }

      console.log(this.listaCincoMejores);


    }



}
