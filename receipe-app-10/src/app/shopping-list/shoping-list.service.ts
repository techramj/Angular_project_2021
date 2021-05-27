import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient("apple",5), new Ingredient('Cucumber',2)
  ];

  ingridentAdded = new EventEmitter<Ingredient>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }







}
