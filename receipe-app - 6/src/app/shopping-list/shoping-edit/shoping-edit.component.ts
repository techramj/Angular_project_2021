import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {


 @Output() ingridentAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(nameInput : HTMLInputElement, amountInput : HTMLInputElement) {
    this.ingridentAdded.emit(new Ingredient(nameInput.value, parseInt(amountInput.value)));
  }

}
