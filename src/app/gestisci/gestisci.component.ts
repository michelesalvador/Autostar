import { Component, OnInit } from '@angular/core';
import { Auto } from '../model/auto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutoService } from '../auto.service';

@Component({
	selector: 'app-gestisci',
	templateUrl: './gestisci.component.html',
	styleUrls: ['./gestisci.component.css']
})
export class GestisciComponent implements OnInit {

	autoForm = new FormGroup({
		marca: new FormControl('',[Validators.required,Validators.maxLength(20)]),
		modello: new FormControl('',[Validators.required,Validators.maxLength(30)]),
		prezzo: new FormControl( '', [Validators.required,Validators.min(0),
			Validators.pattern('^[-]?([1-9]{1}[0-9]{0,}(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|\.[0-9]{1,2})$') ]),
		colore: new FormControl(''),
		targa: new FormControl('',Validators.maxLength(7))
	});
	constructor( private service: AutoService ) { }

	ngOnInit() {}

	get marca() { return this.autoForm.get('marca'); }
	get modello() { return this.autoForm.get('modello'); }
	get prezzo() { return this.autoForm.get('prezzo'); }
	get colore() { return this.autoForm.get('colore'); }
	get targa() { return this.autoForm.get('targa'); }

	onSubmit() {
		let targa = this.autoForm.get('targa').value;
		const auto = new Auto( null,
			this.autoForm.get('marca').value,
			this.autoForm.get('modello').value,
			this.autoForm.get('prezzo').value,
			this.autoForm.get('colore').value,
			targa == "" ? null : targa
		);
		this.service.sendAutoReactive(auto).subscribe( risposta => {
			console.log(risposta);
		});
	}
}
