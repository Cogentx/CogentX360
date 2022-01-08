import { Directive, HostListener } from '@angular/core';
// AngularFire and Firebase compatibility with pre-Firebase v9
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "@firebase/app-compat";


@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private readonly afAuth: AngularFireAuth) { }

  @HostListener('click')
  onclick() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
