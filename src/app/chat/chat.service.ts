﻿import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Chat } from 'app/model/chat';
import { ChatMsg } from 'app/model/chat-msg';
import { ChatUsuario } from 'app/model/chat-usuario';
import { GeneralService } from 'app/utils/general-service.service';
import { Ciudad } from 'app/model/ciudad';
/**
 * Service for notify and subscribe to events.
 */


@Injectable()
export class ChatService {
    private baseUrl: string;

    constructor(private http: Http,private general:GeneralService) {
        console.log('constructor');
        let city: Ciudad = general.getCity();
        this.baseUrl = city.url + 'Chat';
    }

    public addChat(chat: ChatUsuario) : any{
        return this.http.post('http://tareatsi1ciudad1.azurewebsites.net/api/Chat/Agrupacion', chat);
    }


    public getChats(): Observable<Chat[]> {
        return this.http.get(this.baseUrl).map(res => <Chat[]>res.json() as Chat[]);
    }

    public getMessagesChat(chatId: number): any{ 
        let params: URLSearchParams = new URLSearchParams();
        params.set('idChat', chatId.toString());
        return this.http.get('http://tareatsi1ciudad1.azurewebsites.net/api' + '/Mensajes', { search: params }).map(res => <ChatMsg[]> res.json() as ChatMsg[]);
    }

    public getChatUsuario(usuarioId:number){
    let params: URLSearchParams = new URLSearchParams();
    params.set('idusr', usuarioId.toString());

}

    public addMessage(chat: ChatUsuario): any {
        // chatid usrid mensaje
        console.log('crear mensaje: ', chat);
        return this.http.post('http://tareatsi1ciudad1.azurewebsites.net/api' + '/Mensajes', chat);
    }

    public agregarUsuarioChat(chat: ChatUsuario): any {
        // chatid usrid 
        return this.http.post(this.baseUrl+'Usuarios', chat);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}