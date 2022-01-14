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
    
    let isLoggedin = false;

    // wrap in Arrow Function to avoid invalid Null
    const user = () => this.auth.currentUser;

    isLoggedin = !!user;

    !isLoggedin && this.snackBar.authError('Please Login to Access');
    
    return isLoggedin;
  }
  
}
