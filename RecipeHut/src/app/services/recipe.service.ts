import { Injectable } from '@angular/core';
import recipes from '../../data/recipes.json'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(amount: string){
    return amount === 'all' ? [...recipes.hits] : [...recipes.hits].splice(0, parseInt(amount));
  }
}
