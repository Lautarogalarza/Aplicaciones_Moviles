import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) { }

  login(email: string, password: string) {

    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(response => {
        resolve(response);
      }).catch(error => rejected(error));

    });
  }



  getCurrentUser() {
    return this.AFauth.currentUser;
  }


}
