import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

const firebaseConfig = {
  apiKey: "AIzaSyCZXucxSzxiCEQjELB0DAtDgPAkrOr6XiA",
  authDomain: "pps2-1494a.firebaseapp.com",
  databaseURL: "https://pps2-1494a.firebaseio.com",
  projectId: "pps2-1494a",
  storageBucket: "pps2-1494a.appspot.com",
  messagingSenderId: "688778384191",
  appId: "1:688778384191:web:97a92c9c36e758db63798a"
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule, IonicStorageModule.forRoot(), HttpClientModule,
    IonicStorageModule.forRoot()],
  providers: [
    Camera,
    File,
    WebView,
    StatusBar,
    SplashScreen,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
