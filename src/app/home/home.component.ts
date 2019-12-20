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

	constructor( private autoService: AutoService, private router:Router ) { }

	ngOnInit() {
		this.autoService.vetrinaAuto(3).subscribe( json => {
			this.vetrinaAuto = json as Auto[];
		});
	}

	apriDettaglio(id:number) {
		this.router.navigate(['auto',id]);
	}
}
