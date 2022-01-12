import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { SnackService } from '../services/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly auth: Auth, 
    private snackBar: SnackService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    
    const user = await this.auth.currentUser;
    const isLoggedin = !!user;

    if (!isLoggedin) {
      this.snackBar.authError('Please Login to Access');
    }
    
    return isLoggedin;
  }
  
}
