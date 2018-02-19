import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('Pierogi ruskie',
    `filled dumplings of Central European origin
     made by wrapping unleavened dough around
     a savory or sweet filling and cooking in boiling water.`,
    'https://upload.wikimedia.org/wikipedia/commons/9/9e/Pierogi_z_cebulk%C4%85.jpg'),
    new Recipe('Svíčková na smetaně',
    `typical Czech dish and one of the most popular Czech meals. It is sirloin steak
     prepared with vegetables, spiced with black pepper, allspice, bay leaf and thyme,
     and boiled with double cream.`,
    // tslint:disable-next-line:max-line-length
    `https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG/440px-Sv%C3%AD%C4%8Dkov%C3%A1_na_smetan%C4%9B.JPG`),
  ];

  constructor() { }

  ngOnInit() {
  }

}
