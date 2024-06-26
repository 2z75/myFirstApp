import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { BlockComponent } from './block/block.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DeveloperComponent } from './developer/developer.component';
import { OnomatopiaListComponent } from './onomatopia-list/onomatopia-list.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailApiComponent } from './cocktail-api/cocktail-api.component';
import { NasaComponent } from './nasa/nasa.component';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './pages/create-pokemon/create-pokemon.component';


export const routes: Routes = [
    { path: '', component: PokedexPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'block', component: BlockComponent },
    { path: 'searchmovie', component: SearchMovieComponent },
    { path: 'input', component: DeveloperComponent }, 
    { path: 'user', component: UserProfileComponent },
    { path: 'onomatopia', component: OnomatopiaListComponent },
    { path: 'cocktail', component: CocktailListComponent },
    { path: 'cocktailApi', component: CocktailApiComponent },
    { path: 'nasa', component: NasaComponent },
    { path: 'create', component: CreatePokemonComponent },

];
