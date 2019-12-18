import { Injectable } from '@angular/core';
import { Auto } from './model/auto';
//import { autorepository } from './model/autorepository'; // importazione diretta di un file coi dati
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AutoService {
	private dominio = 'http://localhost:8080';
	//private dominio = 'http://192.168.43.52:8080';
	private servizi = [ '/vetrina/', '/catalogo/', '/auto/', '/invia', '/invia', '/elimina/' ];
	// Carlo
	//private dominio = 'http://192.168.0.167:8080';
	//private servizi = [ '...', '/auto/', '/ottieniAuto/', '/autoInsert', '/autoInsert', '/elimina/' ];
	private testeJson = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

	//private catalogoauto: Auto[];
	constructor( private http: HttpClient ) {
		//this.catalogoauto = autorepository;
	}

	public vetrinaAuto( quante:number ) {
		return this.http.get( this.dominio + this.servizi[0] + quante );
	}
	public elencoAuto( tipo:number ) {
		//return this.catalogoauto;
		return this.http.get( this.dominio + this.servizi[1] + tipo );
	}
	public getAuto( id:number) {
		//return this.catalogoauto[id];
		return this.http.get( this.dominio + this.servizi[2] + id );
	}
	public sendAuto( json:string ) {
		return this.http.post( this.dominio + this.servizi[3], json, this.testeJson );
	}
	public updateAuto( json:string ) {
		return this.http.put( this.dominio + this.servizi[4], json, this.testeJson );
	}
	public destroyCar( id:number ) {
		return this.http.delete( this.dominio + this.servizi[5] + id );
	}
	// dal form reactive
	public sendAutoReactive( auto:Auto ) {
		return this.http.post<Auto>( this.dominio + this.servizi[3], auto, this.testeJson );
	}
}
