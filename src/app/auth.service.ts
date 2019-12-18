import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { shareReplay, tap } from 'rxjs/operators';
import * as moment from "moment";

@Injectable( { providedIn: 'root' } )

export class AuthService {

	constructor( private http: HttpClient ) {}

	login(email: string, password: string) {
		return this.http.post<User>('http://localhost:8080/login', { email, password }).pipe(
			tap( res => this.setSession(res) ),
			shareReplay()
		);
	}

    private setSession( authResult ) {
        const expiresAt = moment().add(authResult.expiresIn,'hours');
        localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }

    logout() {
        localStorage.removeItem("access_token");
		localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
	}

	getToken() {
		return localStorage.getItem("access_token");
	}
}
