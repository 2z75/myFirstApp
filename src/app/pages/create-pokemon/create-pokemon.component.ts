import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokedexService } from '../../services/pokedex.service';
import { Pokemon } from '../../shared/pokemon';

@Component({
    selector: 'app-create-pokemon',
    standalone: true,
    imports: [NgIf, RouterOutlet, RouterLink, FormsModule],
    templateUrl: './create-pokemon.component.html',
    styleUrl: './create-pokemon.component.scss'
})
export class CreatePokemonComponent {
    pokemon: Pokemon = {
        name: "",
        picture: "",
        description: ""
    };

    constructor(private pokedexService: PokedexService) {
    }

    onSubmit(): void {
        this.pokedexService.addPokemon(this.pokemon);
        this.pokemon = { name: '', picture: '', description: '' };
    }
}
