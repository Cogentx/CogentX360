import { Component, Optional } from '@angular/core';
// AngularFire and Firebase v9
import { Auth, signOut, User } from "@angular/fire/auth";
import { authState } from 'rxfire/auth';
import { EMPTY, Observable } from 'rxjs';
// AngularFire and Firebase compatibility with pre-Firebase v9
// import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  // user 'public' because 'auth' needed outside this class (i.e. in associated html template)
  public user: Observable<User|null> = EMPTY;

  constructor(@Optional() public readonly auth: Auth) {
    if (auth) {
      this.user = authState(this.auth);
    }
  }

  async logout() {
    return await signOut(this.auth);
  }

}
