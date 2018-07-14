import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipieSelected = new EventEmitter<Recipe>(); 
    private recipies: Recipe[] = this.recipies = [
        new Recipe(
            1,
            'Pierogi ruskie',
            `filled dumplings of Central European origin
         made by wrapping unleavened dough around
         a savory or sweet filling and cooking in boiling water.`,
            'https://upload.wikimedia.org/wikipedia/commons/9/9e/Pierogi_z_cebulk%C4%85.jpg', 
        [
            new Ingredient("Semi-fat white cheese", 0.5),
            new Ingredient("Potatos", 0.5), 
            new Ingredient("Wheat flour", 0.3), 
            new Ingredient("Egg", 1), 
            new Ingredient("Butter", 0.02), 
        ]),
        new Recipe(
            2,
            'Svíčková na smetaně',
            `typical Czech dish and one of the most popular Czech meals. It is sirloin steak
         prepared with vegetables, spiced with black pepper, allspice, bay leaf and thyme,
         and boiled with double cream.`,
            // tslint:disable-next-line:max-line-length
            `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG/440px-Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG`, 
        [
            new Ingredient("Sirloin", 0.75),
            new Ingredient("Onion", 3),
            new Ingredient("Butter", 0.02), 
            new Ingredient("Wheat flour", 0.3), 
            new Ingredient("Sour cream", 250),
            new Ingredient("Cranberry", 0.1),
        ]),
    ];

    getRecipies()  {
        return this.recipies.slice(); // slice() in this case will return a copy of the array (not a reference)
    }

    getRecipe(id: number) : Recipe {
        return this.recipies.find(r => r.id === id);
      }
}