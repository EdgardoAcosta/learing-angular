import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('recipe 1', 'description 1', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif'),
    new Recipe('recipe 2', 'description 2', 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
