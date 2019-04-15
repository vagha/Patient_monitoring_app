import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class PatientAlertService {
    private _baseURL = 'api/alert';
    constructor(private _http: Http) { }

    sendMail(message: string, user: any): Observable<any> {
        let body = {
            message: message,
            user: user
        };
        return this._http
            .post(this._baseURL, body)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().message || 'Server error');
    }
}
