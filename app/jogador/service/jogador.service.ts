import { Injectable } from '@angular/core';
import { Jogador } from '../class/jogador';
import { Http, Response } from '@angular/http';
//adicione essa linha
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JogadorService {

    //adicione essa linha
    private jogadorUrl = 'https://thiagoamaral.herokuapp.com/jogador';

    //adicione o construtor da classe
    constructor(private http: Http) { }

    getListJogador(): Observable<Jogador[]> {
        return this.http.get(this.jogadorUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    //método para salvar o jogador
    salvarJogador(jogador: Jogador): Observable<Jogador> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!jogador._id) {
            return this.http.post(this.jogadorUrl, jogador, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.jogadorUrl + "/" + jogador._id, jogador, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }

    deletarJogador(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.jogadorUrl + "/" + id, options);
    }

    //Crie esse método
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
