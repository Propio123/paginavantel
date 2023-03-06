import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BodyComponent } from './componentes/body/body.component';
import { PlanesComponent } from './componentes/planes/planes.component';

import { SharedComponent } from './componentes/shared/shared.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutComponent } from './componentes/about/about.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlanesService } from './componentes/servicios/planes.service';
import { OfertasComponent } from './componentes/shared/ofertas/ofertas.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BodyComponent,
    PlanesComponent,
  
    SharedComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    OfertasComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    APP_ROUTING

  ],
  providers: [PlanesService],
  bootstrap: [AppComponent]

})
export class AppModule { }
