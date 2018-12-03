import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getData<T>(url: string) {
		return this.http.get<T>(url);
	}
}
