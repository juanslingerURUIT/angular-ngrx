import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IConfig } from '../models';

@Injectable()
export class ConfigService {
	private url = 'https://jsonplaceholder.typicode.com/todos/1';

	constructor(private http: HttpClient) {}

	public getConfig(): Observable<IConfig> {
		return this.http.get<IConfig>(this.url);
	}
}
