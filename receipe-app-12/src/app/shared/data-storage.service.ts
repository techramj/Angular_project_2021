import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { ShoppingListService } from "../shopping-list/shoping-list.service";
import { map } from 'rxjs/operators';
import { Ingredient } from "./ingredient.model";

@Injectable({providedIn:'root'})
export class DataStorageService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private shppingListService: ShoppingListService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put("https://recipe-project-51da9-default-rtdb.firebaseio.com/recipes.json", recipes)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }

  fetchRecipes() {
    this.http.
      get<Recipe[]>(
        'https://recipe-project-51da9-default-rtdb.firebaseio.com/', {
          headers: {
              'Access-Control-Allow-Origin': '*'
          }
      }
      )
      .pipe(
        map(
          recipes => {
            return recipes.map(
              recipe => {
                return {...recipe, ingridents: recipe.ingridents?recipe.ingridents:[]}
              }
            );
          }
        )
      )
      .subscribe(
        recipes => {
          console.log(recipes);
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
