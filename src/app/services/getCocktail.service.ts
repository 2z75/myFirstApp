import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GetCocktailService {

    constructor(private http: HttpClient) { }

    getNewCocktails(): Observable<Cocktail[]> {
        return this.http.get<Cocktail[]>("assets/cocktails.json");
    }
}