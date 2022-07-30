import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Poha',
      'Indori Poha',
      'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Poha-Recipe-1014x1536.jpg'
    ),
  ];

  @Output() recipeSelectedForDetail = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedForDetail.emit(recipe);
  }
}
