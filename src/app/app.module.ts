import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoautoComponent } from './catalogoauto/catalogoauto.component';
import { DettaglioautoComponent } from './dettaglioauto/dettaglioauto.component';
import { DettaglioautoinputComponent } from './dettaglioautoinput/dettaglioautoinput.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InserisciAutoComponent } from './inserisci-auto/inserisci-auto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestisciComponent } from './gestisci/gestisci.component';
import { FormattaEuroPipe } from './formatta-euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoautoComponent,
	DettaglioautoComponent,
	DettaglioautoinputComponent,
	HomeComponent,
	PageNotFoundComponent,
	InserisciAutoComponent,
	GestisciComponent,
	FormattaEuroPipe
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
