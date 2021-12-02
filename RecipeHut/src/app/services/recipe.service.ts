import { Injectable } from '@angular/core';
import recipes from '../../data/recipes.json'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(){
    return recipes.hits;
  }
}
