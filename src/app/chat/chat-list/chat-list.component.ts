import { Component, OnInit, ViewChild, ComponentRef, ElementRef, AfterViewChecked } from '@angular/core';
import { Chat } from 'app/model/chat';
import { ChatService } from '../chat.service';
import { ChatUsuario } from 'app/model/chat-usuario';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, AfterViewChecked {
     chats = new Array<Chat>();
     nombreNuevo: string;
    alcaldia: number;
     isSeleccionado: boolean;

    
  constructor(private chatService:ChatService) { }

  ngOnInit() {
      this.isSeleccionado = false;
      this.chatService.getChats().subscribe((resp: Chat[]) => { this.chats = resp })
  }
  public agregarAlcaldia(nombre: String) {
      let chat = new ChatUsuario(0, nombre,1,0, '');
      this.chatService.addChat(chat).subscribe();


  }

  public seleccionar() {
      console.log('el combo vale:', this.alcaldia);
      this.isSeleccionado = true;
  }

  ngAfterViewChecked() {

  } 


}
