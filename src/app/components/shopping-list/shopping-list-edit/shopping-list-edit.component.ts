import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from './../ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef; 
  @ViewChild('amountInput') amountInputRef: ElementRef; 
  @Output() ingriedentAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount =  this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingriedentAdded.emit(newIngredient);
  }
}
