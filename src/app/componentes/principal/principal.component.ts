import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { LoginComponent } from "../login/login.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.scss',
    imports: [MenuComponent, LoginComponent, RouterModule]
})
export class PrincipalComponent {

}
