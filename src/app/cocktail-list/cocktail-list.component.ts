import { Component, inject } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/cocktail';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cocktail-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cocktail-list.component.html',
    styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

    cocktails: Cocktail[] = [];

    service = inject(CocktailService);

    ngOnInit(): void {
        this.cocktails = this.service.getCocktail();
    }

}
