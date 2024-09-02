import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ErrorComponent } from './componentes/error/error.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { usuariodeslogueadoGuard, usuariologueadoGuard } from './usuariologueado.guard';
import { ChatComponent } from './componentes/chat/chat.component';

export const routes: Routes = [
    {
        path: 'principal', component: PrincipalComponent,
        children:[
            {path:'login',loadComponent:()=> import('./componentes/login/login.component').then(l => l.LoginComponent)  ,canDeactivate: []},
            {path:'registro',   loadComponent:()=> import('./componentes/registro/registro.component').then(l => l.RegistroComponent), canActivate: []},
            {path:'bienvenida',  loadComponent:()=> import('./componentes/bienvenida/bienvenida.component').then(l => l.BienvenidaComponent)},
            {path:'**', component:LoginComponent}
        ]
    },
    { path: '', redirectTo: 'principal' , pathMatch: 'full' },
    { path: 'chat', component: ChatComponent },
    { path: '**', component: ErrorComponent }
];


