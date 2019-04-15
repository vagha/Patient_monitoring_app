import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';

@Injectable()
export class PatientDailyInformationService {
    private _baseURL = 'api/daily-info';
    constructor(private _http: Http) { }

    create(dailyInfo: any): Observable<any> {
        return this._http
            .post(this._baseURL, dailyInfo)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    list(patientId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${patientId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().message || 'Server error');
    }
}
