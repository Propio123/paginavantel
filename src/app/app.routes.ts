import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./componentes/about/about.component";
import { ContactanosComponent } from "./componentes/contactanos/contactanos.component";
import { HomeComponent } from "./componentes/home/home.component";
import { PlanesComponent } from "./componentes/planes/planes.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'planes', component: PlanesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactanos', component: ContactanosComponent },
   {path: '**', pathMatch: 'full', redirectTo: 'home'   }
    ];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
