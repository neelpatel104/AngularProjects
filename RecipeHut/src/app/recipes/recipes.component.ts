import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
		this.recipe = this.recipeService.getRecipes('1')[0];
  }

}
