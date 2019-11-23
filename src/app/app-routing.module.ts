import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DettaglioautoComponent } from './dettaglioauto/dettaglioauto.component';
import { CatalogoautoComponent } from './catalogoauto/catalogoauto.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InserisciAutoComponent } from './inserisci-auto/inserisci-auto.component';
import { GestisciComponent } from './gestisci/gestisci.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'catalogo/:tipo', component: CatalogoautoComponent, children:
		[{ path: 'auto/:aid', outlet: 'dettaglio', component: DettaglioautoComponent }],
	},
	{ path: 'modifica/:id', component: InserisciAutoComponent },
	{ path: 'inserisci', component: InserisciAutoComponent },
	{ path: 'inserisci2', component: GestisciComponent },
	{ path: 'auto/:aid', component: DettaglioautoComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
