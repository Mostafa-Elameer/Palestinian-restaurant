import { Routes } from '@angular/router';
import { HomeComponent } from './allComponents/pages/home/home.component';
import { NotfoundComponent } from './allComponents/additions/notfound/notfound.component';
import { EatallmealsComponent } from './allComponents/pages/eatallmeals/eatallmeals.component';
import { MealdetilsComponent } from './allComponents/pages/mealdetils/mealdetils.component';
import { DeishsareaComponent } from './allComponents/pages/deishsarea/deishsarea.component';
import { SearchComponent } from './allComponents/pages/search/search.component';
import { WishlistComponent } from './allComponents/pages/wishlist/wishlist.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'eatallmeals', component: EatallmealsComponent },
    { path: 'mealdetils/:id', component: MealdetilsComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'deishsarea/:counrtName', component: DeishsareaComponent },


    { path: '**', component: NotfoundComponent },
];
