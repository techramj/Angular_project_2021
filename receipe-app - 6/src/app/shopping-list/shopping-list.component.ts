import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientAdded: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient("apple",5), new Ingredient('Cucumber',2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngridentAdded(ingrident: Ingredient) {
    console.log(ingrident);
    this.ingredients.push(ingrident);
  }

}
