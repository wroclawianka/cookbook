import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: 'full'},
    { path: 'recipies', component: RecipeBookComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}