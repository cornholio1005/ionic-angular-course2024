import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      imageUrl: 'https://www.gutekueche.at/storage/media/recipe/106126/resp/wiener-schnitzel___webp_940_705.webp',
      ingredients: ['French fries', 'Pork', 'water']
    },
    {
      id: '2',
      title: 'Shpageta',
      imageUrl: 'https://www.koch-mit.de/app/uploads/2019/12/AdobeStock_109759077-768x432.jpeg',
      ingredients: ['Keqap', 'pogaqe', 'water']
    }
  ]

  constructor() { }

  getAllRecipes(){
    return [...this.recipes]; //76 Managing state with services (kjo osht nje feature per arrays ne javaScript quhet dicka "spread")
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id == recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
