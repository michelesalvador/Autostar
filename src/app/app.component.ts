import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Autostar';
  tipoCat : number;	// tipo catalogo passato con il variable binding -> Input

  constructor( private router:Router, private auth: AuthService ) {}

  goHome() {
	this.router.navigate(['']);
  }

  scegliCatalogo( tipo:number ) {
	  this.tipoCat = tipo;
	  this.router.navigate(['catalogo',tipo]);
  }
}
