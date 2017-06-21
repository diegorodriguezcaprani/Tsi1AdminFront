import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Usuario } from 'app/model/usuario';
import { Ciudad } from 'app/model/ciudad';

@Injectable()
export class GeneralService {
    private userUrl: string = 'http://proyectotsi1.azurewebsites.net/api/Login';
    private usuarioUrl: string = 'http://proyectotsi1.azurewebsites.net/api/Usuarios'
    private usuario: Usuario;
    constructor(private http: Http) {
        console.log('constructor');
    }

    public getUsuario(): Usuario {
        console.log('en la sesion hay: ', localStorage.getItem('currentUser'));
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    public getCity(): Ciudad {
        return JSON.parse(localStorage.getItem('currentCity'));
    }

    public getUsuarioById(id: Number):Observable<Usuario> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id.toString());
        return this.http.get(this.usuarioUrl, { search: params }).map(response => response.json() as Usuario );
                                                                 
    }

    public login(userId: string, tokenId: string): any {
        console.log("entro a login", userId, tokenId);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        var respuestaFace: any;
        var user: Usuario;
        this.getDatosUser(userId, tokenId).subscribe((value: Response) => {
            respuestaFace = value.json();
            console.log("facebook devolvio", respuestaFace);
            user = new Usuario(0, userId, respuestaFace.first_name, respuestaFace.last_name,'');
            this.usuario = user;
            let respuesta = this.crearUser().subscribe((respuesta: any) => { this.usuario = respuesta.json(); console.log('respeusta vale: ', respuesta); localStorage.setItem('currentUser', respuesta.text());});
            this.usuario.UsuarioId = respuesta.valor;
            
            console.log('usuario id vale:', respuesta)
        });
    }

    public getDatosUser(userId: string, tokenId: string): Observable<Response> {
        let facebookUrl: string = 'https://graph.facebook.com/v2.6/' + userId + '?fields=first_name,last_name&access_token=' + tokenId;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(facebookUrl, options);
    }


    public crearUser() :any{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log('crear usuario', this.usuario)
        return this.http.post(this.userUrl, this.usuario, options)
    }

    public getUsuarios(): Observable<Usuario[]> {
        return this.http.get(this.usuarioUrl).map(res => <Usuario[]>res.json() as Usuario[]);
    }

}


