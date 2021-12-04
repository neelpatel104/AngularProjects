import { RecipeService } from './services/recipe.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title: string = 'RecipeHut';
	recipeSearchQuery: string = 'Tarte';
	recipes: Array<any> = [];

	constructor(private recipeService:RecipeService){}

	ngOnInit(){
		this.recipes = this.recipeService.getRecipes();
		console.log(this.recipes.find(recipe => recipe.recipe.label.includes(this.recipeSearchQuery)));
	}

	recipeSearchQueryChanged(): Array<any>{
		if (this.recipeSearchQuery == ''){
			return [];
		}
		return this.recipes.filter(element => element.recipe.label.startsWith(this.recipeSearchQuery) || element.recipe.label.includes(this.recipeSearchQuery));
	}
}
