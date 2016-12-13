import { Injectable } from '@angular/core';
import { Time } from '../class/time';
import { Http, Response } from '@angular/http';
//adicione essa linha
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimeService {

    //adicione essa linha
    private timeUrl = 'https://thiagoamaral.herokuapp.com/time';

    //adicione o construtor da classe
    constructor(private http: Http) { }

    getListTime(): Observable<Time[]> {
        return this.http.get(this.timeUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    //método para salvar o time
    salvarTime(time: Time): Observable<Time> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        if (!time._id) {
            return this.http.post(this.timeUrl, time, options)
                .map(res => res.json())
                .catch(this.handleError);
        } else {
            return this.http.put(this.timeUrl + "/" + time._id, time, options)
                .map(res => res.json())
                .catch(this.handleError);
        }

    }

    deletarTime(id: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete(this.timeUrl + "/" + id, options);
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
