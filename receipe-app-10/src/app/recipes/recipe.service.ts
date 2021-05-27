import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pizza', 'Delious Recipe', '../../assets/images/pizza.jpg',
      [new Ingredient('bread',1),new Ingredient('Cheese',2)]),
    new Recipe('Salad', 'Spicy Recipe', '../../assets/images/salad.jpg',
      [new Ingredient('Cucumber',4),new Ingredient('Olive',3)])
  ];

  constructor(private shoppingListService : ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();  //slice is used to get the copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }







}
