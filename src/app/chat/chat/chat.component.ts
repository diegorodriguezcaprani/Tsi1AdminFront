import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { ChatMsg } from 'app/model/chat-msg';
import { GeneralService } from 'app/utils/general-service.service';
import { Usuario } from 'app/model/usuario';
import { ChatService } from 'app/chat/chat.service';
import { ChatUsuario } from 'app/model/chat-usuario';
import { Chat } from 'app/model/chat';

declare var Pusher: any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnChanges, AfterViewChecked {
    @Input() chat: Chat;
     messages = new Array<String>();
     ultUser: Number;
     mensajeNuevo: string;
     pusher: any;
     channel;
     user: Usuario;
    @ViewChild('scrolling') private scroll: ElementRef;

    constructor(private general: GeneralService, private chatService: ChatService) {
        console.log('creo pusher chat');
        this.crearPusherChat();
    }

    ngOnInit() {
        this.scrollToBottom();
        console.log('entrada chat:', this.chat.ChatId);
        if (this.chat.ChatId > 0) {
            this.loadMessages(this.chat.ChatId.valueOf());
        }
        this.user = this.general.getUsuario();
        
    }

    ngOnChanges() {
        if (this.channel != null) {
            this.channel.unbind('my-event'); // removes just `decoratedHandler` for the `new-comment` event
        }
          this.messages = [];
        if (this.chat.ChatId > 0) {
            this.loadMessages(this.chat.ChatId.valueOf());
            this.subscribeToChannel();
        }
    }

    private msgFormat(msg: ChatMsg): String {
        console.log(msg);
        let result: String;
        result = msg.fecha + ':           ' + msg.Nombre+':' + msg.Mensaje;
      return result;
  }


  public loadMessages(chatId: number) {
      console.log('cargar mensajes con chatid:', chatId);
      this.chatService.getMessagesChat(chatId).subscribe((resp) => {
          //console.log('respondio mensajes:',resp);
          let colMsgChat: ChatMsg[] = resp;
          this.messages = colMsgChat.map(val => this.msgFormat(val));
      });
  }

  public enviarMensaje() {
      let chatMensaje = new ChatUsuario(this.chat.ChatId, '', this.user.UsuarioId, 0, this.mensajeNuevo);
      this.chatService.addMessage(chatMensaje).subscribe();
  }


  private crearPusherChat() {
      this.pusher = new Pusher('6e63ad3e4d4ab9070643', {
          cluster: "mt1"
      });
  }

  private subscribeToChannel() {
      this.channel = this.pusher.subscribe(this.chat.ChannelName);
      console.log("Pusher bind channel chat", this.chat.ChannelName);
      this.channel.bind('my-event', (data) => {
          console.log("recibi de pusher chat: ", data);
          this.agregarMensaje(JSON.parse(data.message));
      });
  }

  private agregarMensaje(data: ChatMsg) {
      console.log('agrego mensaje pusher: ', data);
      this.messages.push(this.msgFormat(data));
  }

  ngAfterViewChecked() {
      this.scrollToBottom();
  } 

  public scrollToBottom(): void {
          this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
      }

  }

