import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class PatientService {
    private _baseURL = 'api/patient';
    constructor(private _http: Http) { }

    list(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().message || 'Server error');
    }
}
