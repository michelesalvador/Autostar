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
import { LoginComponent } from './login/login.component';
import { JwtModule } from "@auth0/angular-jwt";

export function tokennoGetter() {
	let token = localStorage.getItem("access_token");
	if( !token )
		return "sdfdafxx.sadffsad.asdfsfda";
	else
		return token;
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CatalogoautoComponent,
	DettaglioautoComponent,
	DettaglioautoinputComponent,
	HomeComponent,
	PageNotFoundComponent,
	InserisciAutoComponent,
	GestisciComponent,
	FormattaEuroPipe,
	LoginComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	JwtModule.forRoot({
		config: {
		  tokenGetter: tokennoGetter,
		  whitelistedDomains: ["localhost:8080", "autostar-server.herokuapp.com"],
		  blacklistedRoutes: ["example.com/examplebadroute/"],
		  //headerName: "YourHeaderName", // il default è 'Authorization'
		  throwNoTokenError: true
		  //authScheme: "" // di default aggiunge 'Bearer ' davanti al token
		}
	  })
  ],
  providers: []
})
export class AppModule { }
