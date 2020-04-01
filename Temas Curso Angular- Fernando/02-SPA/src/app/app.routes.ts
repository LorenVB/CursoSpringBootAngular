
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);

