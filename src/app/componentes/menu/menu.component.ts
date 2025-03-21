import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  /**
   *
   */
  constructor(public srvUsr:UsuarioService) {
    
  }
  public salir(){
    this.srvUsr.desloguear();
  }
}
