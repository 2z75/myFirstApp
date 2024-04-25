import { Component } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
import { PokedexService } from '../../services/pokedex.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-pokedex-page',
    standalone: true,
    imports: [ PokemonListComponent, PokemonDetailComponent, RouterLink, RouterOutlet],
    templateUrl: './pokedex-page.component.html',
    styleUrl: './pokedex-page.component.scss'
})
export class PokedexPageComponent {
    pokemons!: Pokemon[];
    selectedPokemon!: Pokemon;


    constructor(private pokedexService: PokedexService) {
    }

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(): void {
        this.pokedexService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
    }

    onSelect(pokemon: Pokemon): void {
        this.selectedPokemon = pokemon;
    }
}
