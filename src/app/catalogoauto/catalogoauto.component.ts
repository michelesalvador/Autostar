import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from '../model/auto';
import { AutoService } from '../auto.service';

@Component({
	selector: 'app-catalogoauto',
	templateUrl: './catalogoauto.component.html',
	styleUrls: ['./catalogoauto.component.css']
})
export class CatalogoautoComponent implements OnInit, OnChanges {

	// 'tipoCatalogo' qui arriva col variable binding:  <app-catalogoauto [tipoCatalogo]="...">
	@Input() tipoCatalogoInput : number;
	tipoCatalogo: number;
	catalogoauto: Auto[];
	auto: Auto;
	mostraDettaglio = false;
	titolo: string;

	constructor(private autoService: AutoService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		/*this.route.paramMap.subscribe( params => { // undefined
			this.tipoCatalogo = parseInt(params.get('tipo'));
			this.titolo = this.tipoCatalogo == 1 ? "Auto nuove" : "Auto usate";
			this.mostraDettaglio = false;
			this.catalogoauto = this.autoService.elencoAuto(this.tipoCatalogo)[0] as Auto[];
			console.log(this.tipoCatalogo,this.catalogoauto);
		});*/

		/*this.route.params.subscribe( params => {
			this.tipoCatalogo = parseInt(params['tipo']);
			this.titolo = this.tipoCatalogo == 1 ? "Auto nuove" : "Auto usate";
			this.mostraDettaglio = false;
			console.log( 'tipo', this.tipoCatalogo );
		});
		this.autoService.elencoAuto(this.tipoCatalogo).subscribe( json => {
			console.log( 'json', json );
			this.catalogoauto = json as Auto[];
		});*/

		this.route.params.subscribe( params => { // OK
			this.tipoCatalogo = parseInt(params['tipo']);
			this.titolo = this.tipoCatalogo == 1 ? "Auto nuove" : "Auto usate";
			this.mostraDettaglio = false;
			this.autoService.elencoAuto(this.tipoCatalogo).forEach( next => {
				this.catalogoauto = next as Auto[];
			});
		});
	}

	/* Chiamato automaticamente alla modifica della variabile Input() tipoCatalogoInput */
	ngOnChanges() {
		this.titolo = this.tipoCatalogoInput == 1 ? "Auto nuove" : "Auto usate";
		this.mostraDettaglio = false;
		this.autoService.elencoAuto(this.tipoCatalogoInput).forEach( json => {
			this.catalogoauto = json as Auto[];
		});
	}

	dettaglioAuto(auto: Auto) {
				this.auto = auto;
				this.mostraDettaglio = true;
			}

	invalidaDettaglio() {
				this.mostraDettaglio = false;
			}

	distruggiAuto(id: number) {
		if(confirm("Sicurissimo?")) {
			this.autoService.destroyCar(id).forEach(risposta => {
				const ok = risposta["affectedRows"];
				console.log("distruggiAuto " + id, ok);
				if (ok > 0) {
					this.mostraDettaglio = false;
				} else {
					alert("affectedRows: " + ok);
				}
			});
		}
	}
}
