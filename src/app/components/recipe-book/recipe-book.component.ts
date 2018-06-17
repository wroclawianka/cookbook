import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]  
})
export class RecipeBookComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipieSelected.subscribe(
      (recipe: Recipe) => this.selectedRecipe = recipe
    );
  }

  recipeSelected(recipe : Recipe){
    this.selectedRecipe = recipe;
  }

}
