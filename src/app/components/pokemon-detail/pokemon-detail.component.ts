import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../shared/pokemon';

@Component({
    selector: 'app-pokemon-detail',
    standalone: true,
    imports: [ NgIf, FormsModule],
    templateUrl: './pokemon-detail.component.html',
    styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
    @Input() pokemon!: Pokemon;
}
