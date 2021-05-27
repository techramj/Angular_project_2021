import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription= this.shoppingListService.startEditing.subscribe(
      (index:number) => {
        this.editMode = true;
        this.editedIndex = index;
        this.editedItem = this.shoppingListService.getIngridient(index);
        this.shoppingForm.setValue({'name':this.editedItem.name,'amount':this.editedItem.amount});
      }
    );
  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const ingridient : Ingredient =new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedIndex, ingridient);
    } else {
      this.shoppingListService.addIngredient(ingridient);
    }
    this.editMode = false;
    form.reset();
  }

  onclear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedIndex);

    }
    this.editMode = false;
    this.shoppingForm.reset();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
