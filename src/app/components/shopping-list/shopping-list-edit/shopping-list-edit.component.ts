import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference : ElementRef;
  @ViewChild('amountInput') amountInputReference : ElementRef;
  @Output() ingredentAdded = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
      const ingName = this.nameInputReference.nativeElement.value;
      const ingAmount = this.amountInputReference.nativeElement.value;
      const newIngredent = new Ingredient(ingName, ingAmount);
      this.ingredentAdded.emit(newIngredent);
  }
}
