import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { BlockComponent } from './block/block.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { DeveloperComponent } from './developer/developer.component';

export const routes: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'block', component: BlockComponent },
    { path: 'searchmovie', component: SearchMovieComponent},
    { path: 'input', component: DeveloperComponent}, 
    { path: 'user', component: UserProfileComponent}

];