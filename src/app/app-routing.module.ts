import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './components/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { SelectRecipeComponent } from './components/recipe-book/select-recipe/select-recipe.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: 'full'},
    { path: 'recipies', component: RecipeBookComponent, children: [
        { path: '', component: SelectRecipeComponent },
        { path: ':id', component: RecipeDetailComponent },
    ]},
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