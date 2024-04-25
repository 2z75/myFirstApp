import { Injectable } from '@angular/core';
import { Pokemon } from '../shared/pokemon';
import { POKEMONS } from '../shared/pokemons-mock';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PokedexService {

    private pokemons: Pokemon[] = POKEMONS

    constructor() { }

    getPokemons(): Observable<Pokemon[]> {
        return of(this.pokemons);
    }
    addPokemon(pokemon: Pokemon): void {
        console.log("Ajouter un nouveau pokemon", pokemon);
        this.pokemons.push(pokemon);
    }
}
