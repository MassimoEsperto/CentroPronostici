import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    /**
     * Costruttore
     * @param route Servizio di routing
     */
    constructor(private route: Router, private auth: AuthService) {
    }

    /**
     * Determina se l'utente può accedere a determinate routes 
     * in base alla presenza del token di autenticazione nella session
     */
    canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log("this.auth.isLogged()",this.auth.isLogged())
        if (this.auth.isLogged()) return true

        // Se il token non è presente,
        // Redirecta al login

        this.route.navigate(['/login'])

        return false
    }
}