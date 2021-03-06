import { RecipeService } from './../services/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	recipes: Array<any> = [];

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
		this.recipes = this.recipeService.getRecipes('10');
    for (let recipe of this.recipes){
      recipe.stars = Math.floor(Math.random() * (5 - 4 + 1) + 4);
    }
  }

}
