import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  assetPath = "../../assets/images/";

  getImagePath(imgName) {
    return this.assetPath + "/" + imgName;
  }

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Delious Recipe', this.getImagePath('pizza.jpg')),
    new Recipe('Recipe 2', 'Spicy Recipe', this.getImagePath('salad.jpg'))
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
