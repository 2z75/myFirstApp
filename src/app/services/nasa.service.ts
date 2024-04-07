import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NasaService {
    constructor(private http: HttpClient) { }

    getImage(): Observable<any> {
        const url = ""
    }
}
