export class Auto {
	constructor(
		public id: number,
		public marca: string,
		public modello: string,
		public prezzo: number,
		public colore?: string,
		public targa?: string
	) { }
}
