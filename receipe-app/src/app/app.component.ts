import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "receipe-app";
  activeMenu:string = "recipe";

  onMenuClicked(menu) {
    console.log("menu clieck: " + menu);
    this.activeMenu = menu;
    console.log('onMenuClicked: '+menu);
  }
}
