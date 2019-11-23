import { Component, OnInit } from '@angular/core';
import { Auto } from '../model/auto';
import { AutoService } from '../auto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-inserisci-auto',
	templateUrl: './inserisci-auto.component.html',
	styleUrls: ['./inserisci-auto.component.css']
})
export class InserisciAutoComponent implements OnInit {

	marche = ['Audi', 'Bugatti', 'Chevrolet', 'Dunlop', 'Extern', 'Ford', 'Gundam'];
	base: Auto;
	titolo = "Inserisci nuova auto";
	id = null;

	constructor(private autoService: AutoService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.paramMap.subscribe(parametri => {
			this.id = parseInt(parametri.get('id'));
			if (this.id > 0) {
				this.autoService.getAuto(this.id).forEach(json => {
					if (json[0] == undefined) {
						this.titolo = "Auto inesistente";
					} else {
						this.base = json[0] as Auto;
						this.titolo = "Modifica auto";
					}
				});
			} else {
				this.base = new Auto(null, '', '', null, '', null);
			}
		});
	}

	onSubmit() {
		if (this.base.targa == "")
			this.base.targa = null;
		let json = JSON.stringify(this.base);
		if (this.id > 0) {
			this.autoService.updateAuto(json).subscribe(risposta => {
				let ok: number = risposta['affectedRows'];
				if (ok > 0) {
					alert("Aggiornata ok.");
				} else {
					alert("Auto non aggiornata.");
				}
			});
		} else {
			this.autoService.sendAuto(json).subscribe(risposta => {
				let ok: number = risposta['affectedRows'];
				if (ok > 0) {
					alert("Inserita " + ok + " con id " + risposta['insertId']);
				} else {
					alert("Auto non inserita.");
				}
			});
		}
	}
}
