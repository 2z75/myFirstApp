import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokedexService } from '../../services/pokedex.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-pokemon-list',
    standalone: true,
    imports: [ NgForOf, FormsModule],
    templateUrl: './pokemon-list.component.html',
    styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
    @Input() pokemons!: Pokemon[];
    @Output() pokemonSelected = new EventEmitter<Pokemon>();
    private pokemonSubscription!: Subscription;

    constructor(private pokedexService: PokedexService) {
    }

    ngOnInit(): void {
        this.pokemonSubscription = this.pokedexService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon): void {
        this.pokemonSelected.emit(pokemon);
    }
}
