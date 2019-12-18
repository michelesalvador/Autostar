import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from '../model/auto';
import { AutoService } from '../auto.service';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-dettaglioauto',
	templateUrl: './dettaglioauto.component.html',
	styleUrls: ['./dettaglioauto.component.css']
})
export class DettaglioautoComponent implements OnInit {

	autom: Auto;

	// ActivatedRoute rappresenta il link che è stato cliccato
	constructor( private route: ActivatedRoute, private router:Router, private autoService: AutoService, public auth:AuthService ) {}

	ngOnInit() {
		this.route.paramMap.subscribe( parametri => {
			this.autoService.getAuto(parseInt(parametri.get('aid'))).forEach( json => {
				if( json[0] != undefined) {
					this.autom = json[0] as Auto;
				} else {
					this.autom = null;
				}
			});
		});
	}

	chiudiDettaglio() {
		let path = window.location.pathname; // prende tutto  /catalogo/2/(dettaglio:auto/3)
		path = path.replace(/\/\(.*/, ""); // restituisce  /catalogo/2
		//console.log(path);
		this.router.navigate( [path] ); // comunque utilizzerebbe solo  /catalogo/2
	}

	modificaAuto( id:number ) {
		this.router.navigate(['modifica',id]);
	}

	eliminaAuto( id:number ) {
		if( confirm("Sicuro?") ) {
			this.autoService.destroyCar(id).forEach( risposta => {
				const ok = risposta["affectedRows"];
				if( ok > 0 ) {
					this.router.navigate(['']);
				} else {
					alert( "affectedRows: " + ok );
				}
			});
		}
	}
}
