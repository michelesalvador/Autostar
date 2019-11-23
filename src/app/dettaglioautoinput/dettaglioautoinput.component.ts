import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../model/auto';


@Component({
	selector: 'app-dettaglioauto-input',
	templateUrl: './dettaglioautoinput.component.html',
	styleUrls: ['./dettaglioautoinput.component.css']
})
export class DettaglioautoinputComponent implements OnInit {

	@Input() automobile: Auto;
	@Output() chiuditore = new EventEmitter();
	@Output() eliminatore = new EventEmitter();

	constructor() {}
	ngOnInit() {}

	chiudiDettaglio() {
		this.chiuditore.emit();
	}

	eliminaAuto(id:number) {
		this.eliminatore.emit(id);
	}
}
