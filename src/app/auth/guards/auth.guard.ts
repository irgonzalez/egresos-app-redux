import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(): Promise<boolean> | boolean {
        return this.authService.isAuth().then( () => {
            return true
        }).catch( () => {
            this.router.navigateByUrl('/login')
            return false
        })
    }

}
