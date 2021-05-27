import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html'
})
export class HeaderComponent {

  @Output("menuSelected") activeMenuClicked = new EventEmitter<string>();

  constructor() {
    console.log('header constructor called.');
  }

  onRecipesClick() {
    this.activeMenuClicked.emit('recipe');
    console.log('recipe');
  }

  onShopingListClick() {
    this.activeMenuClicked.emit('shoppingList');
    console.log('shoppingList');
  }


}
