import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredientAdded: Ingredient;

  ingredients: Ingredient[];

  ingrientSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    //  this.shoppingListService.ingridentAdded.subscribe(

    //    (ingredient: Ingredient) => {
    //      this.ingredients = this.shoppingListService.getIngredients();
    //   }
    //  );
    this.ingrientSub= this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients=ingredients }
    );

  }


  ngOnDestroy(): void {
    this.ingrientSub.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }


}
