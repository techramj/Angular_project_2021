import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(name: string, amount: number) {
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
    this.shoppingListService.ingridentAdded.emit(new Ingredient(name, amount));
  }

}
