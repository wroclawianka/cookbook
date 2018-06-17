import { EventEmitter } from '@angular/core';

import { Ingredient } from './ingredient.model';

export class ShoppingListService {
    ingredientsChange = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    //TODO: group ingredients with the same name
    
    getIngredients() {
        return this.ingredients.slice(); //slice() -> copy, not a reference!
    }
    
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    }

    addIngredients(newIngredients: Ingredient[]){
        // this.ingredients = this.ingredients.concat(newIngredients);
        this.ingredients.push(...this.ingredients); //spread!
        this.ingredientsChange.emit(this.ingredients.slice());        
    }
}