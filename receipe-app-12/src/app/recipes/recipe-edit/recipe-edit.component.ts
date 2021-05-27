import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;


  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService, private formBuilder: FormBuilder,
  private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();

      }
    );
  }

  onSubmit() {
    console.log('Ingrients: ',this.recipeForm.value['ingredients']);
    let recipe = new Recipe(0, this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
/*
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }*/
    this.editMode = false;
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).controls.push(new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[1-9]*$/)])
    }));
  }

  onCancel() {
    this.editMode = false;
    this.router.navigate(['../'], {relativeTo:this.route})

  }

  private initForm() {
    let recipeName = "";
    let imagePath = "";
    let recipeDesc = "";
    let recipeIngridents = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      console.log(recipe);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe['ingridents']) {
        for (let ing of recipe.ingridents) {
          recipeIngridents.push(new FormGroup(
            {
              'name': new FormControl(ing.name, Validators.required),
              'amount':new FormControl(ing.amount,[Validators.required, Validators.pattern(/^[1-9]+[1-9]*$/)])
            }
          ));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(recipeDesc, Validators.required),
      'ingredients': recipeIngridents

    });
  }

}
