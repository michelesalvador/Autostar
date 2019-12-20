import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from '../auto.service';
import { Auto } from '../model/auto';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	vetrinaAuto:Auto[];
	errore:boolean;

	constructor( private autoService: AutoService, private router:Router ) { }

	ngOnInit() {
		this.autoService.vetrinaAuto(3).subscribe( json => {
			this.vetrinaAuto = json as Auto[];
		}, (err) => {
			this.errore = true;
			console.log(err);
		});
		
		/*).add(
			catchError((error) => {
			  // it's important that we log an error here.
			  // Otherwise you won't see an error in the console.
			  console.error('error loading the list of users', error);
			  
			  return of();
			})
		);*/
	}

	apriDettaglio(id:number) {
		this.router.navigate(['auto',id]);
	}
}
