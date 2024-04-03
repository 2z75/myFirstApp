import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail';

@Injectable({
    providedIn: 'root'
})
export class CocktailService {

    cocktails: Cocktail[] = [
        {
            name: "Vodka/Redbull",
            price: 8,
            picture: "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/82150_origin-scaled.jpg"
        },
        {
            name: "Sex on the Beach",
            price: 13,
            picture: "https://mondespiritueux.com/wp-content/uploads/2020/12/sex-on-the-beach-cocktail.jpg"
        },
        {
            name: "Planteur",
            price: 10,
            picture: "https://assets.afcdn.com/recipe/20221013/136055_w600.jpg"
        },
        {
            name: "Americano",
            price: 13,
            picture: "https://www.poupadou.com/blog/cocktail-americano/"
        },
        {
            name: "Mai Tai",
            price: 15,
            picture: "https://www.foodandwine.com/thmb/34TH_DI7agKbR_GjBIEPX2df6Jg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Mai-Tai-Cocktail-FT-BLOG1122-43e6748207e04826b57b8654cedb6bd8.jpg"
        }
    ]

    getCocktail(): Cocktail[] {
        return this.cocktails;
    }
}
