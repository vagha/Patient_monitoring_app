import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class PatientSymptomsService {
    private _baseURL = 'api/diseases';
    constructor(private _http: Http) { }

    getDiseases(symptoms: string): Observable<any> {
        console.log(symptoms);
        let body = {
            symptoms: symptoms.split(',')
        };
        console.log(body);
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
