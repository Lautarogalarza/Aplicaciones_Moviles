import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-cosas-feas',
  templateUrl: './cosas-feas.page.html',
  styleUrls: ['./cosas-feas.page.scss'],
})
export class CosasFeasPage implements OnInit {

  fotos: Observable<any[]>;
  listaFotos: any[];
  spinner: boolean = false;

  constructor(private camera: Camera, private context: AngularFireDatabase, private authService: AuthService) {
    this.fotos = this.context.list('fotosFeas').valueChanges();
    this.fotos.subscribe(fotos => this.listaFotos = fotos, error => console.log(error));

  }

  ngOnInit() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);

  }

  base64Image: string;



  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,

    }

    this.camera.getPicture(options).then((imageData) => {


      this.base64Image = 'data:image/jpeg;base64,' + imageData
      setTimeout(() => {
        this.GuardarFoto(this.base64Image);

      }, 2000);

    }, (err) => {

      console.log("Camera issue: " + err);
    });

  }

  GuardarFoto(data) {

    this.authService.getCurrentUser().then((Response: any) => {
      let fecha = this.getFecha();

      this.context.list('fotosFeas').set(Response.uid + fecha, { usuario: Response.email, fecha: fecha, foto: data, likesUser: "", cantLikes: 0, id: Response.uid + fecha });

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



  AccessGallery() {

    this.camera.getPicture({

      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,

      destinationType: this.camera.DestinationType.DATA_URL

    }).then((imageData) => {


      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.GuardarFoto(this.base64Image);

    }, (err) => {

      console.log(err);

    });

  }


}
