import { Component } from '@angular/core';
import { GetCocktailService } from '../services/getCocktail.service';
import { Cocktail } from '../models/cocktail';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cocktail-api',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cocktail-api.component.html',
    styleUrl: './cocktail-api.component.scss'
})
export class CocktailApiComponent {

    cocktailsApi: Cocktail[] = [];

    constructor(private getCocktails: GetCocktailService) {}

    ngOnInit() {
        this.getCocktails.getNewCocktails().subscribe((cocktail) => {
        this.cocktailsApi = cocktail;
        });
    }
}
