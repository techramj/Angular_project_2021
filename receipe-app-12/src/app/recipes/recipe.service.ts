import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {

  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  recipeIdCount: number = 2;

  private recipes1: Recipe[] = [
     new Recipe(1,'Pizza', 'Delious Recipe', '../../assets/images/pizza.jpg',
      [new Ingredient('bread',1),new Ingredient('Cheese',2)]),
    new Recipe(2,'Salad', 'Spicy Recipe', '../../assets/images/salad.jpg',
      [new Ingredient('Cucumber',4),new Ingredient('Olive',3)])
  ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService : ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();  //slice is used to get the copy
  }

  setRecipes(recipes:Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    const recipe=this.recipes.find(
      (recipe) => {
        return recipe.id === id;
      });
    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.recipeChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    recipe.id = ++this.recipeIdCount;
    this.recipes.push(recipe);
    console.log('adding recipe'+recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(recipeId: number, recipe: Recipe) {
    recipe.id = recipeId;
    let r = this.recipes.find(
      (rec) => { return rec.id === recipeId }
    );
    r.name = recipe.name;
    r.description = recipe.description;
    r.imagePath = recipe.imagePath;
    r.ingridents = recipe.ingridents;
    this.recipeChanged.next(this.recipes.slice());
    console.log(this.recipes);

  }


  deleteRecipe(id: number) {

    for (var i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === id) {
        this.recipes.splice(i, 1);
        break;
      }
    }
    this.recipeChanged.next(this.recipes.slice());
    console.log(id, this.recipes);
  }









}
