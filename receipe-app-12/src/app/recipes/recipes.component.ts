import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit , OnDestroy{

  recipeSelected: Recipe;
  recipeSubcription: Subscription;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeSubcription=this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = recipe;
      }
    );
  }

  ngOnDestroy() {
    this.recipeSubcription.unsubscribe();
  }


}
