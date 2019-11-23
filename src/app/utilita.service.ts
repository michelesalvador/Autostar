import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class UtilitaService {

	formatMoney( soldi:number ) : string {
		return Number(soldi).toLocaleString( 'it-IT', {minimumFractionDigits: 2} ) + ' €';
	}
}
