import { Component } from '@angular/core';
import { ChatServicesService } from '../../servicios/chat-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  public chats: any[]=[];
  public mensaje: string="";
  constructor(public srvChat: ChatServicesService) {
    srvChat.getChat().then(t=> {
      this.chats = t.docs.map(chat => chat.data());
    console.log(this.chats );
    }
    );
  }

  public enviar(){
    this.srvChat.setChat({Mensaje:this.mensaje, Usuario:'yo'});
  }

}
