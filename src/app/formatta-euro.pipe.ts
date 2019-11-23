import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formattaEuro'
})
export class FormattaEuroPipe implements PipeTransform {

	transform(soldi: number): string {
		return Number(soldi).toLocaleString('it-IT', { minimumFractionDigits: 2 }) + ' €';
	}
}
