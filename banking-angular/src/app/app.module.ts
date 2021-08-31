import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { RacuniComponent } from '../components/racuni/racuni.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from '../components/home/home.component';
import {environment} from '../environments/environment';
import {GradService} from '../services/grad.service';
import {AdresaService} from '../services/adresa.service';
import {SifraNamjeneService} from '../services/sifra-namjene.service';
import {StrankaService} from '../services/stranka.service';
import {RacunService} from '../services/racun.service';
import {GradoviStore} from '../stores/gradovi.store';
import {AdresaStore} from '../stores/adresa.store';
import {SifraNamjeneStore} from '../stores/sifra-namjene.store';
import {StrankaStore} from '../stores/stranka.store';
import {RacunStore} from '../stores/racun.store';
import { SvotaPipe } from '../pipes/svota.pipe';
import { NoviRacunComponent } from '../components/novi-racun/novi-racun.component';
import { NovaStrankaComponent } from '../components/nova-stranka/nova-stranka.component';
import { SifraComponent } from '../components/sifra/sifra.component';
import { FindStrankaComponent } from '../components/find-stranka/find-stranka.component';
import { StrankeComponent } from '../components/stranke/stranke.component';
import { MojeStrankeComponent } from '../components/moje-stranke/moje-stranke.component';
import { MojiRacuniComponent } from '../components/moji-racuni/moji-racuni.component';
import { DetaljiRacunaComponent } from '../components/detalji-racuna/detalji-racuna.component';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import { CertifikatComponent } from '../components/certifikat/certifikat.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    AppComponent,
    RacuniComponent,
    HomeComponent,
    SvotaPipe,
    NoviRacunComponent,
    NovaStrankaComponent,
    SifraComponent,
    FindStrankaComponent,
    StrankeComponent,
    MojeStrankeComponent,
    MojiRacuniComponent,
    DetaljiRacunaComponent,
    CertifikatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-e4zdhtbo.eu.auth0.com',
      clientId: 'svpThqAVTfN1q0qbAJibZkfBfAwkb0z9',
      audience: 'https://banking/api',
      scope: 'access:api',
      redirectUri: 'https://www.belavic-accounting.tk/',
      httpInterceptor: {
        allowedList: [
          {
            uri: environment.url + '/*',
            tokenOptions: {
              audience: 'https://banking/api',
              scope: 'read:current_user'
            }
          }
        ]
      }
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    GradService,
    AdresaService,
    SifraNamjeneService,
    StrankaService,
    RacunService,
    GradoviStore,
    AdresaStore,
    SifraNamjeneStore,
    StrankaStore,
    RacunStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
