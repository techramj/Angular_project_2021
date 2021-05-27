//import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  //ingridentAdded = new EventEmitter<Ingredient>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("apple",5), new Ingredient('Cucumber',2)
  ];


  getIngredients() {
    return this.ingredients.slice();
  }

  getIngridient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingridient: Ingredient) {
    this.ingredients[index] = ingridient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {

    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());

  }







}
