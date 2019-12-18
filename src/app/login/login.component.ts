import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

//const publicKey = require('../public.key');
//import publicKey from "../public.key";

// Vari modi per importare una dipendenza
//import 'jsonwebtoken';	// Uncaught ReferenceError: global is not defined ???
//import jwt from 'jsonwebtoken';
//import { sign, verify } from 'jsonwebtoken';
//const jwt = require('jsonwebtoken');
//import * as jwt from "jsonwebtoken";

import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder,
		private auth: AuthService,
		private router: Router) {

		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ngOnInit() {}

	login() {
		const val = this.form.value;

		if (val.email && val.password) {
			this.auth.login(val.email, val.password).subscribe( risposta => {

				const helper = new JwtHelperService();
				console.log(risposta['accessToken']);
				console.log(this.auth.getToken());
				const decodedToken = helper.decodeToken( this.auth.getToken() );
				const expirationDate = helper.getTokenExpirationDate( this.auth.getToken() );
				const isExpired = helper.isTokenExpired( this.auth.getToken() );
				console.log(decodedToken,expirationDate,isExpired);

				/*let pubblica = "-----BEGIN RSA PUBLIC KEY-----\nMEgCQQCJIwKUT9scwFRJfyVrjGwt0fKSM7Ek+kLnNWrn9Zr3mXbYybIMoU+0XxxI\n/7K89bXGPvr2kRCIPq4/akrFCDs/AgMBAAE=\n-----END RSA PUBLIC KEY-----";

				let verifyOptions = {
					expiresIn:  "12h",
					algorithm:  ["RS256"]
				};
				//let jwt = jsonwebtoken.
				let legit = jwt.verify( risposta['idToken'], pubblica, verifyOptions );
				console.log("JWT verification result: " + JSON.stringify(legit));*/

				//this.router.navigateByUrl('/');
			});
		}
	}

	logout() {
		this.auth.logout();
		this.router.navigateByUrl('/');
	}
}
