import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable, of } from 'rxjs';

import { Clan } from '../data/models/clan';

@Injectable({
	providedIn: 'root'
})
export class ServerService {
	private baseURL = 'http://www.holycow2.com/onerouses/';

	constructor(private http: HttpClient) { }

	getClanInfo(): Observable<Clan> {
		return this.http.get<Clan>(this.baseURL + 'claninfo.php').pipe(
				catchError(this.handleError<Clan>('getClanInfo', null))
			);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error); //log to console
			return of(result as T);
		}
	}
}